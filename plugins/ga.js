import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  Vue.use(VueAnalytics, Object.assign({ router }, {
    id: 'UA-115744052-1',
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  }))
}
