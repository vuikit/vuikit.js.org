<template>
  <div>
    <div class="tm-sidebar-left uk-visible@m">
      <h3>Guide</h3>
      <guide-nav></guide-nav>
    </div>

    <div class="tm-main uk-section uk-section-default">
      <div class="uk-container uk-container-small uk-position-relative">
        <nuxt-child
          v-vk-scroll.force="{ target: `h2 a, h3 a, a.tm-internal-link[href*='#']`, offset: 100 }"
          @beforeScroll.native="updateHash"
        ></nuxt-child>
        <page-nav
          v-vk-scroll="{ target: 'a', offset: 100 }"
          @beforeScroll.native="updateHash"
          :sections="sections"
        ></page-nav>
      </div>
    </div>
  </div>
</template>

<script>
import GuideNav from '~/components/guide/nav.vue'
import PageNav from '~/components/guide/page-nav.vue'

export default {
  components: {
    GuideNav,
    PageNav
  },
  data: () => ({
    sections: []
  }),
  watch: {
    $route () {
      this.$nextTick(() => {
        window.$nuxt.$once('triggerScroll', () => {
          this.sections = this.getSections()
        })
      })
    }
  },
  methods: {
    getSections () {
      // retrieve sections from the component constructor options
      return [...this.$route.matched].pop().components.default.options.sections || []
    },
    updateHash (e) {
      this.$router.replace({ hash: e.detail.from.hash })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.sections = this.getSections()
    })

    this.$el.addEventListener('click', e => {
      const isAnchor = e.target.nodeName === 'A'
      const isDemo = e.target.getAttribute('href') === '#'

      if (isAnchor && isDemo) {
        e.preventDefault()
      }
    })
  }
}
</script>
