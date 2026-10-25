// andiem.quyctd.dev serves the Ấn Điểm landing + legal pages from /public/an-diem/.
// `has: host` runs before path matching so the subdomain is a virtual root.
const AN_DIEM_HOST = [{ type: 'host', value: 'andiem.quyctd.dev' }]

// ichi.quyctd.dev serves the Ichi landing + legal pages from /public/ichi/.
const ICHI_HOST = [{ type: 'host', value: 'ichi.quyctd.dev' }]

// teethjudge.quyctd.dev serves the TeethJudge landing + legal pages from /public/teethjudge/.
const TEETHJUDGE_HOST = [{ type: 'host', value: 'teethjudge.quyctd.dev' }]

// an.quyctd.dev serves the An landing + legal pages from /public/an/.
const AN_HOST = [{ type: 'host', value: 'an.quyctd.dev' }]

// grindvocab.quyctd.dev serves the GrindVocab landing + legal pages from /public/grindvocab/.
const GRINDVOCAB_HOST = [{ type: 'host', value: 'grindvocab.quyctd.dev' }]

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/my-wedding', destination: '/wedding', permanent: false },
      { source: '/projects', destination: '/#apps', permanent: false },
    ]
  },
  async rewrites() {
    return {
      // Only `/` needs beforeFiles — the portfolio's pages/index.tsx would
      // otherwise win. beforeFiles rules chain, so keep this list to one.
      beforeFiles: [
        { source: '/', has: AN_DIEM_HOST, destination: '/an-diem/index.html' },
        { source: '/', has: ICHI_HOST, destination: '/ichi/index.html' },
        { source: '/', has: TEETHJUDGE_HOST, destination: '/teethjudge/index.html' },
        { source: '/', has: GRINDVOCAB_HOST, destination: '/grindvocab/index.html' },
        { source: '/', has: AN_HOST, destination: '/an/index.html' },
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
        { source: '/privacy', has: TEETHJUDGE_HOST, destination: '/teethjudge/privacy.html' },
        { source: '/terms',   has: TEETHJUDGE_HOST, destination: '/teethjudge/terms.html' },
        { source: '/support', has: TEETHJUDGE_HOST, destination: '/teethjudge/support.html' },
        { source: '/:path*',  has: TEETHJUDGE_HOST, destination: '/teethjudge/:path*' },
        { source: '/privacy', has: GRINDVOCAB_HOST, destination: '/grindvocab/privacy.html' },
        { source: '/terms',   has: GRINDVOCAB_HOST, destination: '/grindvocab/terms.html' },
        { source: '/support', has: GRINDVOCAB_HOST, destination: '/grindvocab/support.html' },
        { source: '/:path*',  has: GRINDVOCAB_HOST, destination: '/grindvocab/:path*' },
        { source: '/privacy', has: AN_HOST, destination: '/an/privacy.html' },
        { source: '/terms',   has: AN_HOST, destination: '/an/terms.html' },
        { source: '/support', has: AN_HOST, destination: '/an/support.html' },
        { source: '/:path*',  has: AN_HOST, destination: '/an/:path*' },
        { source: '/wedding', destination: '/wedding/index.html' },
        // Older links to An's pages on the main host.
        { source: '/an', destination: '/an/index.html' },
        { source: '/an/privacy', destination: '/an/privacy.html' },
        { source: '/an/support', destination: '/an/support.html' },
        { source: '/an/terms', destination: '/an/terms.html' },
      ],
      fallback: [],
    }
  },
}

