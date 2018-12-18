import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import navigation from './navigation.json'
import '@/styles/index.less'

import PluginGA from '@/plugins/ga'
// import PluginChat from '@/plugins/chat'

// import IconFlask from '~/assets/icons/flask.svg'
// import IconClipboard from '~/assets/icons/clipboard.svg'
// Vue.component('vk-icons-flask', IconFlask)
// Vue.component('vk-icons-clipboard', IconClipboard)

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(PluginGA, router)
// Vue.use(PluginChat)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  provide: { navigation }
}).$mount('#app')
