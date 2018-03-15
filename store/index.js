import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      offcanvas: false,
      navigation: {
        'Main': {
          'Home': '/',
          'Guide': '/guide',
          'Roadmap': '/roadmap',
          'Download': '/download'
        },
        'Getting Started': {
          'Introduction': '/guide/introduction',
          'Integration': '/guide/integration',
          'Components': '/guide/components',
          'Directives': '/guide/directives',
          'Icons': '/guide/icons',
          'Styles': '/guide/styles'
        },
        'Components': {
          'Breadcrumb': '/guide/breadcrumb',
          'Button': '/guide/button',
          'Card': '/guide/card',
          'Drop': '/guide/drop',
          'Dropdown': '/guide/dropdown',
          'Grid': '/guide/grid',
          'Icon': '/guide/icon',
          'Iconnav': '/guide/iconnav',
          'Label': '/guide/label',
          'Modal': '/guide/modal',
          'Nav': '/guide/nav',
          'Navbar': '/guide/navbar',
          'Notification': '/guide/notification',
          'Offcanvas': '/guide/offcanvas',
          'Pagination': '/guide/pagination',
          'Spinner': '/guide/spinner',
          'Sticky': '/guide/sticky',
          'Subnav': '/guide/subnav',
          'Table': '/guide/table',
          'Tabs': '/guide/tabs'
        },
        'Directives': {
          'HeightMatch': '/guide/height-match',
          'HeightViewport': '/guide/height-viewport',
          'Margin': '/guide/margin',
          'Scroll': '/guide/scroll',
          'Tooltip': '/guide/tooltip'
        }
      }
    },
    mutations: {
      offcanvas (state, payload) {
        state.offcanvas = payload
      }
    }
  })
}

export default createStore
