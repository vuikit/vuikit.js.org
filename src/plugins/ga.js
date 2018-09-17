import VueAnalytics from 'vue-analytics'

export default function (Vue, router) {
  Vue.use(VueAnalytics, {
    router,
    id: process.env.VUE_APP_GA_ID,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  })
}
