const path = require('path')

module.exports = function () {

  // add VuikitIcons
  this.extendBuild(config => {
    // integrate vuikit-icons-loader
    config.module.rules.push({
      test: /\.svg$/,
      loader: '@vuikit/icons-loader',
      // limit it to assets/icons
      include: resolve('../../assets/icons')
    })

    // force previous rules to exclude assets/icons
    config.module.rules
      .find(r => r.test.toString() === (/\.(png|jpe?g|gif|svg)$/).toString())
      .exclude = resolve('../../assets/icons')
  })

  // register plugin
  this.addPlugin(resolve('plugin.js'))
}

function resolve (src) {
  return path.resolve(__dirname, src)
}
