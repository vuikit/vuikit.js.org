<template>
  <div class="tm-section-texture uk-light">
    <div
      v-vk-height-viewport="{ offsetTop: true, offsetBottom: true }"
      class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
    >
      <div class="uk-width-1-1">
        <div class="uk-container">

          <p>
            <img src="@/assets/images/vuikit-logo-large.svg">
          </p>

          <p class="uk-margin-medium uk-text-lead">
            A consistent and responsive <a href="https://vuejs.org/">Vue</a> UI library,
            <br class="uk-visible@s">
            based on the front-end framework <a href="https://getuikit.com/">UIkit</a>.
          </p>

          <router-link
            to="guide"
            tag="vk-button-link"
            v-text="'Get Started'"
            class="tm-button-default"
          ></router-link>

          <p class="uk-margin-medium uk-width-large uk-align-center">
            If you are enjoying Vuikit and want to support the project consider making a small
            <a href="https://github.com/sponsors/miljan-aleksic" target="_blank">donation</a>. It means a lot :)
          </p>

        </div>
      </div>
    </div>

    <div class="uk-section-small">
      <div class="uk-container uk-container-expand uk-text-center uk-position-relative">

        <ul class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom" uk-margin>
          <li>
            <span>Version 0.8.2</span>
          </li>
          <li>
            <a class="uk-text-lowercase uk-text-middle" href="https://twitter.com/vuikit">
              <vk-icon icon="twitter" /> @vuikit
            </a>
          </li>
          <li>
            <a class="uk-text-lowercase uk-text-middle" href="https://github.com/vuikit/vuikit">
              <vk-icon icon="github" /> GitHub
            </a>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
