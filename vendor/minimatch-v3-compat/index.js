// Old tools (eslint 8 plugins, glob 7) call `require('minimatch')(path, pattern)`.
// minimatch v11 only exports named functions, so expose the v3 shape on top of it.
const mm = require('minimatch')

function minimatch(path, pattern, options) {
  return mm.minimatch(path, pattern, options)
}

Object.assign(minimatch, mm)
minimatch.makeRe = (pattern, options) => new mm.Minimatch(pattern, options).makeRe()

module.exports = minimatch
