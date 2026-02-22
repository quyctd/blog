import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const CDN_ZENLOVE = 'https://cdn.zenlove.me'
const CDN_RESOURCE = 'https://cdn-resource.zenlove.me'
const PROXY_PREFIX = '/wedding-proxy'

/**
 * Proxy CDN requests and rewrite URL references in CSS/JS so fonts and assets
 * load same-origin on Vercel (avoids CORS with cdn.zenlove.me in production).
 *
 * Handles i18n: path can be /wedding-proxy/... or /en/wedding-proxy/... (locale prefix).
 */
export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  // Strip locale prefix so we match and proxy correctly (e.g. /en/wedding-proxy/... -> /wedding-proxy/...)
  const pathnameWithoutLocale = pathname.replace(/^\/en(?=\/)/, '')
  const isCdnZenlove = pathnameWithoutLocale.startsWith(`${PROXY_PREFIX}/cdn-zenlove`)
  const isCdnResource = pathnameWithoutLocale.startsWith(`${PROXY_PREFIX}/cdn-resource`)

  if (!isCdnZenlove && !isCdnResource) {
    return NextResponse.next()
  }

  const base = isCdnZenlove ? CDN_ZENLOVE : CDN_RESOURCE
  const pathPrefix = isCdnZenlove ? `${PROXY_PREFIX}/cdn-zenlove` : `${PROXY_PREFIX}/cdn-resource`
  const pathAfter = pathnameWithoutLocale
    .replace(pathPrefix, '')
    .replace(/^\//, '') || ''
  const targetUrl = `${base}/${pathAfter}${req.nextUrl.search}`

  try {
    const res = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'User-Agent': req.headers.get('user-agent') ?? 'Mozilla/5.0',
        Accept: req.headers.get('accept') ?? '*/*',
      },
      // Vercel edge: avoid caching the fetch so we always get fresh
      cache: 'no-store',
    })

    const contentType = res.headers.get('content-type') ?? ''
    const isText = contentType.includes('text/css') ||
      contentType.includes('javascript') ||
      contentType.includes('json')

    const outHeaders = new Headers()
    res.headers.forEach((v, k) => {
      if (k.toLowerCase() !== 'content-encoding') outHeaders.set(k, v)
    })
    outHeaders.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
    outHeaders.set('Access-Control-Allow-Origin', '*')

    if (!res.ok) {
      return new NextResponse(res.body, { status: res.status, headers: outHeaders })
    }

    if (!isText) {
      return new NextResponse(res.body, { status: 200, headers: outHeaders })
    }

    const body = await res.text()
    const origin = req.nextUrl.origin
    const rewritten = body
      .replace(new RegExp(escapeRe(CDN_ZENLOVE), 'g'), `${origin}${PROXY_PREFIX}/cdn-zenlove`)
      .replace(new RegExp(escapeRe(CDN_RESOURCE), 'g'), `${origin}${PROXY_PREFIX}/cdn-resource`)

    return new NextResponse(rewritten, { status: 200, headers: outHeaders })
  } catch (err) {
    console.error('[wedding-proxy CDN]', targetUrl, err)
    return new NextResponse('CDN proxy error', { status: 502 })
  }
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const config = {
  // With i18n, production may use /en/ prefix; match both so middleware runs and rewrites CSS
  matcher: [
    '/wedding-proxy/cdn-zenlove/:path*',
    '/wedding-proxy/cdn-resource/:path*',
    '/en/wedding-proxy/cdn-zenlove/:path*',
    '/en/wedding-proxy/cdn-resource/:path*',
  ],
}
