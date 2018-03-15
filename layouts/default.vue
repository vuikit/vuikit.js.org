<template>
  <vk-offcanvas-content>

    <vk-sticky :media="960" v-if="/guide/.test($route.path)">
      <navbar @menu="$store.state.offcanvas = true"></navbar>
    </vk-sticky>
    <navbar v-else @menu="$store.state.offcanvas = true"></navbar>

    <div class="tm-section-texture">
      <nuxt></nuxt>
    </div>

    <vk-offcanvas
      :show="$store.state.offcanvas"
      @update:show="val => $store.commit('offcanvas', val)"
      :overlay="true"
      transition="push"
    >
      <div class="uk-panel">
        <vk-nav v-for="(pages, category, index) in $store.state.navigation"
          :key="index"
          :class="['tm-nav', { 'uk-margin-top': index }]"
        >
          <vk-nav-item-header :title="category" />
          <router-link v-for="(page, title) in pages"
            exact
            :key="page"
            :to="page"
            tag="li"
            @click.native="$store.state.offcanvas = false"
          >
            <a>{{ title }}</a>
          </router-link>
        </vk-nav>
      </div>
    </vk-offcanvas>

  </vk-offcanvas-content>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import GuideNav from '~/components/guide/nav.vue'

export default {
  components: {
    Navbar,
    GuideNav
  }
}
</script>
