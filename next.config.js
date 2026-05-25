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
    return {
      // beforeFiles runs ahead of Next.js's i18n + page resolution, so `/`
      // on the subdomain isn't swallowed by the main portfolio page.
      beforeFiles: [
        { source: '/',        has: AN_DIEM_HOST, destination: '/an-diem/index.html' },
        { source: '/privacy', has: AN_DIEM_HOST, destination: '/an-diem/privacy.html' },
        { source: '/terms',   has: AN_DIEM_HOST, destination: '/an-diem/terms.html' },
        { source: '/:path*',  has: AN_DIEM_HOST, destination: '/an-diem/:path*' },
      ],
      afterFiles: [
        // Wedding is a static iframe wrapper — no proxying needed.
        { source: '/wedding', destination: '/wedding/index.html' },
      ],
      fallback: [],
    }
  },
}

