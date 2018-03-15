const { resolve } = require('path')

module.exports = function () {
  this.extendBuild(config => {

    config.module.rules.push({
      test: /\.md$/,
      exclude: /node_modules/,
      use: [
        resolve(__dirname, './loader')
      ]
    })
  })

  this.addPlugin(resolve(__dirname, 'plugin.js'))
}
