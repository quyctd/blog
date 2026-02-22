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
