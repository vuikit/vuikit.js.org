const mainMenu = {
  home: {
    title: 'Home',
    path: '/'
  },
  guide: {
    title: 'Guide',
    path: '/guide'
  },
  roadmap: {
    title: 'Roadmap',
    path: '/roadmap'
  },
  download: {
    title: 'Download',
    path: '/download'
  }
}

export default ({ app }, inject) => {
  inject('menu', mainMenu)
}
