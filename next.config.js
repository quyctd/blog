// andiem.quyctd.dev serves the Ấn Điểm landing + legal pages from /public/an-diem/.
// `has: host` runs before path matching so the subdomain is a virtual root.
const AN_DIEM_HOST = [{ type: 'host', value: 'andiem.quyctd.dev' }]

// ichi.quyctd.dev serves the Ichi landing + legal pages from /public/ichi/.
const ICHI_HOST = [{ type: 'host', value: 'ichi.quyctd.dev' }]

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/my-wedding', destination: '/wedding', permanent: false },
    ]
  },
  async rewrites() {
    return {
      // Only `/` needs beforeFiles — the portfolio's pages/index.tsx would
      // otherwise win. beforeFiles rules chain, so keep this list to one.
      beforeFiles: [
        { source: '/', has: AN_DIEM_HOST, destination: '/an-diem/index.html' },
        { source: '/', has: ICHI_HOST, destination: '/ichi/index.html' },
      ],
      // afterFiles short-circuits on the first match + filesystem hit, so
      // the catch-all here doesn't double-rewrite paths the explicit rules
      // (or beforeFiles) already handled.
      afterFiles: [
        { source: '/privacy', has: AN_DIEM_HOST, destination: '/an-diem/privacy.html' },
        { source: '/terms',   has: AN_DIEM_HOST, destination: '/an-diem/terms.html' },
        { source: '/support', has: AN_DIEM_HOST, destination: '/an-diem/support.html' },
        { source: '/:path*',  has: AN_DIEM_HOST, destination: '/an-diem/:path*' },
        { source: '/privacy', has: ICHI_HOST, destination: '/ichi/privacy.html' },
        { source: '/terms',   has: ICHI_HOST, destination: '/ichi/terms.html' },
        { source: '/support', has: ICHI_HOST, destination: '/ichi/support.html' },
        { source: '/:path*',  has: ICHI_HOST, destination: '/ichi/:path*' },
        { source: '/wedding', destination: '/wedding/index.html' },
      ],
      fallback: [],
    }
  },
}

