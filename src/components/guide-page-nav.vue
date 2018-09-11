<template>
  <div class="tm-sidebar-right uk-visible@l">
    <vk-sticky :offset="160">

      <vk-scrollspy-nav closest="li" :offset="100">
        <vk-nav class="tm-nav">
          <vk-nav-item
            v-for="{ id, title } in sections"
            :key="id"
            :title="title"
            :href="`#${id}`"
          ></vk-nav-item>
          <vk-nav-item-divider />
          <vk-nav-item
            title="Report issue"
            icon="warning"
            target="_blank"
            href="https://github.com/vuikit/vuikit/issues"
          ></vk-nav-item>
          <vk-nav-item
            title="Get help"
            icon="commenting"
            target="_blank"
            href="https://github.com/vuikit/vuikit/issues"
          ></vk-nav-item>
          <vk-nav-item
            title="Edit this page"
            icon="pencil"
            target="_blank"
            :href="`https://github.com/vuikit/vuikit.js.org/tree/master/src/views${$route.fullPath}.md`"
          ></vk-nav-item>
        </vk-nav>
      </vk-scrollspy-nav>
    </vk-sticky>
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true
    }
  }
}
</script>
