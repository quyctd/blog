const ZENLOVE_WEDDING = 'https://zenlove.me/s/quy-hai-220326'

// andiem.quyctd.dev serves the Ấn Điểm landing + legal pages from /public/an-diem/.
// `has: host` runs before path matching so the subdomain is a virtual root.
const AN_DIEM_HOST = [{ type: 'host', value: 'andiem.quyctd.dev' }]

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      { source: '/my-wedding', destination: '/wedding', permanent: false },
    ]
  },
  async rewrites() {
    return [
      // ── Ấn Điểm subdomain ───────────────────────────────────────────────
      // Pretty URLs → static HTML in /public/an-diem/. Listed before the
      // catch-all so /privacy doesn't get caught by /:path*.
      { source: '/',        has: AN_DIEM_HOST, destination: '/an-diem/index.html' },
      { source: '/privacy', has: AN_DIEM_HOST, destination: '/an-diem/privacy.html' },
      { source: '/terms',   has: AN_DIEM_HOST, destination: '/an-diem/terms.html' },
      // Static assets on subdomain (styles.css, icon.png, …) → /an-diem/*
      { source: '/:path*',  has: AN_DIEM_HOST, destination: '/an-diem/:path*' },

      // ── Wedding (existing) ──────────────────────────────────────────────
      { source: '/wedding', destination: '/wedding/index.html' },
      // API — app may request .../api-zenlove.me/... (hostname in path); proxy both forms
      { source: '/wedding/api', destination: 'https://api.zenlove.me' },
      { source: '/wedding/api/:path*', destination: 'https://api.zenlove.me/:path*' },
      // ZenLove Next.js auth (e.g. /api/auth/session)
      { source: '/wedding/api/auth', destination: 'https://zenlove.me/api/auth/' },
      { source: '/wedding/api/auth/:path*', destination: 'https://zenlove.me/api/auth/:path*' },
      // CDN origins — proxy to avoid CORS (browser requests same-origin, we fetch from CDN)
      { source: '/wedding/cdn', destination: 'https://cdn.zenlove.me/' },
      { source: '/wedding/cdn/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/wedding/cdn-resource', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/wedding/cdn-resource/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
      // Common image/static roots at zenlove.me (not under /go/...)
      { source: '/wedding/images/:path*', destination: 'https://zenlove.me/images/:path*' },
      { source: '/wedding/uploads/:path*', destination: 'https://zenlove.me/uploads/:path*' },
      { source: '/wedding/media/:path*', destination: 'https://zenlove.me/media/:path*' },
      { source: '/wedding/assets/:path*', destination: 'https://zenlove.me/assets/:path*' },
      { source: '/wedding/static/:path*', destination: 'https://zenlove.me/static/:path*' },
      { source: '/wedding/:path*', destination: `${ZENLOVE_WEDDING}/:path*` },
      // Serve the static wedding page from public/wedding/index.html
    ]
  },
}

