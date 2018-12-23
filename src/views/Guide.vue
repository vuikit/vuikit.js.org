<template>
  <div>
    <div class="tm-sidebar-left uk-visible@m">
      <h3>Guide</h3>
      <guide-nav
        title="Getting Started"
        :items="navigation['Getting Started']"
        class="uk-margin-bottom"
      />
      <guide-nav
        title="Components"
        :items="navigation['Components']"
        class="uk-margin-bottom"
      />
      <guide-nav
        title="Directives"
        :items="navigation['Directives']"
      />
    </div>

    <div class="tm-main uk-section uk-section-default">
      <div class="uk-container uk-container-small uk-position-relative">
        <div
          v-vk-scroll.force="{ target: `h2 a, h3 a, a.tm-internal-link[href*='#']`, offset: 100 }"
          @beforeScroll.native="updateHash"
        >
          <router-view/>
        </div>
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
import GuideNav from '@/components/guide-nav'
import PageNav from '@/components/guide-page-nav'

export default {
  inject: ['navigation'],
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
        this.sections = this.getSections()
      })
    }
  },
  methods: {
    getSections () {
      // retrieve sections from the component constructor options
      const lastMatchedRoute = [...this.$route.matched].pop()
      return get(lastMatchedRoute, 'components.default.sections', [])
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

function get (obj, path) {
  return path.split('.').reduce((acc, val) => acc && acc[val], obj)
}
</script>
