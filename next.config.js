const ZENLOVE_WEDDING = 'https://zenlove.me/s/quy-hai-220326'

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      // Asset and subpath requests: proxy to ZenLove (order matters)
      { source: '/my-wedding/_next/:path*', destination: 'https://zenlove.me/_next/:path*' },
      // API — app may request .../api-zenlove.me/... (hostname in path); proxy both forms
      { source: '/my-wedding/api-zenlove.me', destination: 'https://api.zenlove.me/' },
      { source: '/my-wedding/api-zenlove.me/:path*', destination: 'https://api.zenlove.me/:path*' },
      { source: '/my-wedding/api-zenlove', destination: 'https://api.zenlove.me/' },
      { source: '/my-wedding/api-zenlove/:path*', destination: 'https://api.zenlove.me/:path*' },
      // ZenLove Next.js auth (e.g. /api/auth/session)
      { source: '/my-wedding/api/auth', destination: 'https://zenlove.me/api/auth/' },
      { source: '/my-wedding/api/auth/:path*', destination: 'https://zenlove.me/api/auth/:path*' },
      // CDN origins — proxy to avoid CORS (browser requests same-origin, we fetch from CDN)
      { source: '/my-wedding/cdn-zenlove', destination: 'https://cdn.zenlove.me/' },
      { source: '/my-wedding/cdn-zenlove/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/my-wedding/cdn-zenlove.me', destination: 'https://cdn.zenlove.me/' },
      { source: '/my-wedding/cdn-zenlove.me/:path*', destination: 'https://cdn.zenlove.me/:path*' },
      { source: '/my-wedding/cdn-resource', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/my-wedding/cdn-resource/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
      { source: '/my-wedding/cdn-resource.me', destination: 'https://cdn-resource.zenlove.me/' },
      { source: '/my-wedding/cdn-resource.me/:path*', destination: 'https://cdn-resource.zenlove.me/:path*' },
      // Common image/static roots at zenlove.me (not under /go/...)
      { source: '/my-wedding/images/:path*', destination: 'https://zenlove.me/images/:path*' },
      { source: '/my-wedding/uploads/:path*', destination: 'https://zenlove.me/uploads/:path*' },
      { source: '/my-wedding/media/:path*', destination: 'https://zenlove.me/media/:path*' },
      { source: '/my-wedding/assets/:path*', destination: 'https://zenlove.me/assets/:path*' },
      { source: '/my-wedding/static/:path*', destination: 'https://zenlove.me/static/:path*' },
      { source: '/my-wedding/:path*', destination: `${ZENLOVE_WEDDING}/:path*` },
      // Document request /my-wedding is handled by pages/my-wedding.tsx (HTML rewrite)
    ]
  },
}

