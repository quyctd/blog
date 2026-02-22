const ZENLOVE_WEDDING = 'https://zenlove.me/go/quy-tesssst'

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      // Asset and subpath requests: proxy to ZenLove (order matters)
      { source: '/wedding-proxy/_next/:path*', destination: 'https://zenlove.me/_next/:path*' },
      // API — app may request .../api-zenlove.me/... (hostname in path); proxy both forms
      { source: '/wedding-proxy/api-zenlove.me', destination: 'https://api.zenlove.me/' },
      { source: '/wedding-proxy/api-zenlove.me/:path*', destination: 'https://api.zenlove.me/:path*' },
      { source: '/wedding-proxy/api-zenlove', destination: 'https://api.zenlove.me/' },
      { source: '/wedding-proxy/api-zenlove/:path*', destination: 'https://api.zenlove.me/:path*' },
      // ZenLove Next.js auth (e.g. /api/auth/session)
      { source: '/wedding-proxy/api/auth', destination: 'https://zenlove.me/api/auth/' },
      { source: '/wedding-proxy/api/auth/:path*', destination: 'https://zenlove.me/api/auth/:path*' },
      // CDN origins — proxy to avoid CORS (browser requests same-origin, we fetch from CDN)
      { source: '/wedding-proxy/cdn-zenlove', destination: 'https://cdn.zenlove.me/' },
      { source: '/wedding-proxy/cdn-zenlove/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/wedding-proxy/cdn-zenlove.me', destination: 'https://cdn.zenlove.me/' },
      { source: '/wedding-proxy/cdn-zenlove.me/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/wedding-proxy/cdn-resource', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/wedding-proxy/cdn-resource/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
      { source: '/wedding-proxy/cdn-resource.me', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/wedding-proxy/cdn-resource.me/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
      // Common image/static roots at zenlove.me (not under /go/...)
      { source: '/wedding-proxy/images/:path*', destination: 'https://zenlove.me/images/:path*' },
      { source: '/wedding-proxy/uploads/:path*', destination: 'https://zenlove.me/uploads/:path*' },
      { source: '/wedding-proxy/media/:path*', destination: 'https://zenlove.me/media/:path*' },
      { source: '/wedding-proxy/assets/:path*', destination: 'https://zenlove.me/assets/:path*' },
      { source: '/wedding-proxy/static/:path*', destination: 'https://zenlove.me/static/:path*' },
      { source: '/wedding-proxy/:path*', destination: `${ZENLOVE_WEDDING}/:path*` },
      // Document request /wedding-proxy is handled by pages/wedding-proxy.tsx (HTML rewrite)
    ]
  },
}

