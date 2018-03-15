export default {
  beforeRouteEnter (to, from, next) {
    next({ path: '/guide/introduction' })
  },
  render (h) {
    return h('div')
  }
}
