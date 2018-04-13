const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  modules: [
    '~/modules/vuikit',
    '~/modules/markdown'
  ],
  plugins: [
    '~/plugins/ga',
    '~/plugins/chat'
  ],
  pageExtensions: ['js', 'vue', 'md'],
  css: [
    '~/assets/theme/index.less'
  ],
  loading: { color: '#2CB77F' },
  head: {
    title: 'Vuikit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vuikit Site and Documentation' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@vuikit' },
      { property: 'twitter:image', content: 'https://vuikit.js.org/images/vuikit-meta.png' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Vuikit' },
      { property: 'og:description', content: 'A responsive Vue UI library based on the fron-tend framework UIkit.' },
      { property: 'og:url', content: 'https://vuikit.js.org/' },
      { property: 'og:site_name', content: 'Vuikit' },
      { property: 'og:image', content: 'https://vuikit.js.org/images/vuikit-meta.png' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' }
    ]
  },
  router: {
    linkActiveClass: 'uk-active',
    linkExactActiveClass: 'uk-active'
  },
  build: {
    extractCSS: true,
    vendor: ['vuikit'],
    extend (config, { isDev }) {
      // add additional paths for less compiling
      config.module.rules
        .find(r => r.test.toString() === (/\.less$/).toString())
        .use.find(u => u.loader === 'less-loader')
        .options.paths = [
          resolve(__dirname, '../../node_modules')
        ]
    }
  },
  render: {
    resourceHints: false,
    gzip: false
  }
}
