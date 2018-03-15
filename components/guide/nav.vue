<template>
  <div>
    <vk-nav
      :key="index"
      :class="['tm-nav', { 'uk-margin-top': index }]"
      v-for="(pages, category, index) in navigation"
    >
      <vk-nav-item-header :title="category" />
      <router-link v-for="(page, title) in pages"
        tag="li"
        :key="page"
        :to="page"
      >
        <a>{{ title }}</a>
      </router-link>
    </vk-nav>
  </div>
</template>

<script>
export default {
  computed: {
    navigation () {
      // an ugly workaround
      // TODO refactor all the navigation workflow
      return {
        'Getting Started': this.$store.state.navigation['Getting Started'],
        'Components': this.$store.state.navigation['Components'],
        'Directives': this.$store.state.navigation['Directives']
      }
    }
  }
}
</script>
