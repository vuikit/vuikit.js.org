import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Guide from './views/Guide'
import Download from './views/Download'
import Roadmap from './views/Roadmap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'uk-active',
  linkExactActiveClass: 'uk-active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/download',
      component: Download
    },
    {
      path: '/roadmap',
      component: Roadmap
    },
    {
      path: '/guide',
      redirect: '/guide/introduction',
      component: Guide,
      children: [
        {
          path: 'breadcrumb',
          component: () => import(/* webpackChunkName: "guide/breadcrumb" */ './views/guide/breadcrumb.md')
        },
        {
          path: 'button',
          component: () => import(/* webpackChunkName: "guide/button" */ './views/guide/button.md')
        },
        {
          path: 'card',
          component: () => import(/* webpackChunkName: "guide/card" */ './views/guide/card.md')
        },
        {
          path: 'components',
          component: () => import(/* webpackChunkName: "guide/components" */ './views/guide/components.md')
        },
        {
          path: 'directives',
          component: () => import(/* webpackChunkName: "guide/directives" */ './views/guide/directives.md')
        },
        {
          path: 'drop',
          component: () => import(/* webpackChunkName: "guide/drop" */ './views/guide/drop.md')
        },
        {
          path: 'dropdown',
          component: () => import(/* webpackChunkName: "guide/dropdown" */ './views/guide/dropdown.md')
        },
        {
          path: 'form',
          component: () => import(/* webpackChunkName: "guide/form" */ './views/guide/form.md')
        },
        {
          path: 'grid',
          component: () => import(/* webpackChunkName: "guide/grid" */ './views/guide/grid.md')
        },
        {
          path: 'height-match',
          component: () => import(/* webpackChunkName: "guide/height-match" */ './views/guide/height-match.md')
        },
        {
          path: 'height-viewport',
          component: () => import(/* webpackChunkName: "guide/height-viewport" */ './views/guide/height-viewport.md')
        },
        {
          path: 'icon',
          component: () => import(/* webpackChunkName: "guide/icon" */ './views/guide/icon.md')
        },
        {
          path: 'iconnav',
          component: () => import(/* webpackChunkName: "guide/iconnav" */ './views/guide/iconnav.md')
        },
        {
          path: 'icons',
          component: () => import(/* webpackChunkName: "guide/icons" */ './views/guide/icons.md')
        },
        {
          path: 'integration',
          component: () => import(/* webpackChunkName: "guide/integration" */ './views/guide/integration.md')
        },
        {
          path: 'introduction',
          component: () => import(/* webpackChunkName: "guide/introduction" */ './views/guide/introduction.md')
        },
        {
          path: 'label',
          component: () => import(/* webpackChunkName: "guide/label" */ './views/guide/label.md')
        },
        {
          path: 'margin',
          component: () => import(/* webpackChunkName: "guide/margin" */ './views/guide/margin.md')
        },
        {
          path: 'modal',
          component: () => import(/* webpackChunkName: "guide/modal" */ './views/guide/modal.md')
        },
        {
          path: 'nav',
          component: () => import(/* webpackChunkName: "guide/nav" */ './views/guide/nav.md')
        },
        {
          path: 'navbar',
          component: () => import(/* webpackChunkName: "guide/navbar" */ './views/guide/navbar.md')
        },
        {
          path: 'notification',
          component: () => import(/* webpackChunkName: "guide/notification" */ './views/guide/notification.md')
        },
        {
          path: 'offcanvas',
          component: () => import(/* webpackChunkName: "guide/offcanvas" */ './views/guide/offcanvas.md')
        },
        {
          path: 'pagination',
          component: () => import(/* webpackChunkName: "guide/pagination" */ './views/guide/pagination.md')
        },
        {
          path: 'scroll',
          component: () => import(/* webpackChunkName: "guide/scroll" */ './views/guide/scroll.md')
        },
        {
          path: 'spinner',
          component: () => import(/* webpackChunkName: "guide/spinner" */ './views/guide/spinner.md')
        },
        {
          path: 'sticky',
          component: () => import(/* webpackChunkName: "guide/sticky" */ './views/guide/sticky.md')
        },
        {
          path: 'styles',
          component: () => import(/* webpackChunkName: "guide/styles" */ './views/guide/styles.md')
        },
        {
          path: 'subnav',
          component: () => import(/* webpackChunkName: "guide/subnav" */ './views/guide/subnav.md')
        },
        {
          path: 'table',
          component: () => import(/* webpackChunkName: "guide/table" */ './views/guide/table.md')
        },
        {
          path: 'tabs',
          component: () => import(/* webpackChunkName: "guide/tabs" */ './views/guide/tabs.md')
        },
        {
          path: 'tooltip',
          component: () => import(/* webpackChunkName: "guide/tooltip" */ './views/guide/tooltip.md')
        }
      ]
    }
  ]
})
