const path = require('path')
const hash = require('hash-sum')
const loaderUtils = require('loader-utils')

const compile = require('@vuikit.js.org/md-compiler')
const renderer = require('./renderer')

const hotReloadAPIPath = 'vue-hot-reload-api'

module.exports = function (content) {
  this.cacheable()

  const isServer = this.target === 'node'
  const isProduction = this.minimize || process.env.NODE_ENV === 'production'
  const options = loaderUtils.getOptions(this) || {}

  const context = (
    this.rootContext ||
    (this.options && this.options.context) ||
    process.cwd()
  )

  const filePath = this.resourcePath
  const shortFilePath = path.relative(context, filePath).replace(/^(\.\.[\\\/])+/, '') // eslint-disable-line
  const moduleId = 'data-v-' + hash(isProduction ? (shortFilePath + '\n' + content) : shortFilePath)

  let output = ''

  // render the comopnent
  output += `const Component = ${compile(renderer(content))}\n`

  // add filename in dev
  if (!isProduction) {
    output += 'Component.__file = ' + JSON.stringify(shortFilePath) + '\n'
  }

  const needsHotReload = (
    !isServer &&
    !isProduction &&
    options.hotReload !== false
  )

  if (needsHotReload) {
    output += 'let disposed = false\n'
  }

  // hot reload
  if (needsHotReload) {
    output +=
      '\n/* hot reload */\n' +
      'if (module.hot) {(function () {\n' +
      `  const hotAPI = require('${hotReloadAPIPath}')\n` +
      '  hotAPI.install(require("vue"), false)\n' +
      '  if (!hotAPI.compatible) return\n' +
      '  module.hot.accept()\n' +
      '  if (!module.hot.data) {\n' +
      // initial insert
      `    hotAPI.createRecord('${moduleId}', Component)\n` +
      '  } else {\n'
    // update
    output +=
      `    hotAPI.reload('${moduleId}', Component)\n  }\n`
    // dispose
    output +=
      '  module.hot.dispose(function (data) {\n' +
      '    disposed = true\n' +
      '  })\n'
    output += '})()}\n'
  }

  output += '\nexport default Component\n'

  return output
}
