const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    extract: process.env.NODE_ENV === 'production',
    sourceMap: process.env.NODE_ENV === 'production',
    loaderOptions: {
      less: {
        relativeUrls: true,
        paths: [
          path.join(__dirname, './src'),
          path.join(__dirname, './node_modules')
        ]
      }
    }
  },
  chainWebpack: config => {
    // MD loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('@vuikit.js.org/md-loader')
      .loader('@vuikit.js.org/md-loader')
      .end()
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack
    }
  }
}
