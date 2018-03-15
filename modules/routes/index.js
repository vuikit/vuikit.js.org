const path = require('path')
// const Glob = require('glob')
// const { promisify } = require('util')

// const glob = promisify(Glob)

module.exports = async function () {
  // const guideFiles = await glob(`${this.options.srcDir}/pages/guide/*`)
  //
  // this.options.router = {
  //   ...this.options.router,
  //   extendRoutes: (routes) => {
  //     routes
  //       .find(route => route.path === '/guide')
  //       .children = [
  //         {
  //           name: 'Button',
  //           path: 'button',
  //           component: path.resolve(this.options.srcDir, 'pages/guide/button.md')
  //         }
  //       ]
  //   }
  // }

  this.addPlugin(resolve('plugin.js'))
}

function resolve (src) {
  return path.resolve(__dirname, src)
}
