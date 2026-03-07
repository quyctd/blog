const ZENLOVE_WEDDING = 'https://zenlove.me/s/quy-hai-220326'

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
      { source: '/wedding', destination: '/wedding/index.html' },
      // API — app may request .../api-zenlove.me/... (hostname in path); proxy both forms
      { source: '/wedding/api', destination: 'https://api.zenlove.me' },
      { source: '/wedding/api/:path*', destination: 'https://api.zenlove.me/:path*' },
      // ZenLove Next.js auth (e.g. /api/auth/session)
      { source: '/wedding/api/auth', destination: 'https://zenlove.me/api/auth/' },
      { source: '/wedding/api/auth/:path*', destination: 'https://zenlove.me/api/auth/:path*' },
      // CDN origins — proxy to avoid CORS (browser requests same-origin, we fetch from CDN)
      { source: '/wedding/cdn-zenlove', destination: 'https://cdn.zenlove.me/' },
      { source: '/wedding/cdn-zenlove/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/wedding/cdn-zenlove.me', destination: 'https://cdn.zenlove.me/' },
      { source: '/wedding/cdn-zenlove.me/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/wedding/cdn-resource', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/wedding/cdn-resource/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
      { source: '/wedding/cdn-resource.me', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/wedding/cdn-resource.me/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
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

