<template>
  <vk-nav class="tm-nav">
    <vk-nav-item-header :title="title" />
    <router-link v-for="(route, name) in items"
      tag="li"
      :key="route"
      :to="route"
    >
      <a>{{ name }}</a>
    </router-link>
  </vk-nav>
</template>

<script>
export default {
  props: {
    title: String,
    items: Object
  }
}
</script>
