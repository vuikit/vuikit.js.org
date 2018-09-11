import VueAnalytics from 'vue-analytics'

export default function (Vue) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_ID,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  })
}
