// andiem.quyctd.dev serves the Ấn Điểm landing + legal pages from /public/an-diem/.
// `has: host` runs before path matching so the subdomain is a virtual root.
const AN_DIEM_HOST = [{ type: 'host', value: 'andiem.quyctd.dev' }]

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/my-wedding', destination: '/wedding', permanent: false },
    ]
  },
  async rewrites() {
    return {
      // beforeFiles runs ahead of page resolution, so `/` on the subdomain
      // isn't swallowed by the main portfolio's index page.
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

