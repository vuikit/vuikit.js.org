<template>
  <div class="uk-light">
    <div
      v-vk-height-viewport="{ offsetTop: true, offsetBottom: true }"
      class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
    >
      <div class="uk-width-1-1">
        <div class="uk-container">

          <p>
            <img src="~/assets/images/vuikit-logo-large.svg">
          </p>

          <p class="uk-margin-medium uk-text-lead">
            A consistent and responsive <a href="https://vuejs.org/">Vue</a> UI framework,
            <br class="uk-visible@s">
            based on the front-end framework <a href="https://getuikit.com/">UIkit</a>.
          </p>

          <div class="uk-grid uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center">
            <div>
              <router-link
                to="guide"
                tag="vk-button-link"
                v-text="'Get Started'"
                class="uk-button-primary uk-button-large tm-button-primary tm-button-large uk-visible@s"
              ></router-link>
              <router-link
                to="guide"
                tag="vk-button-link"
                v-text="'Get Started'"
                class="uk-button-primary tm-button-primary uk-hidden@s"
              ></router-link>
            </div>
            <div>
              <vk-button-link
                size="large"
                v-text="'Github'"
                href="https://github.com/vuikit/vuikit"
                class="tm-button-default tm-button-large uk-visible@s"
              ></vk-button-link>
              <vk-button-link
                v-text="'Github'"
                href="https://github.com/vuikit/vuikit"
                class="tm-button-default uk-hidden@s"
              ></vk-button-link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="uk-section-small">
      <div class="uk-container uk-container-expand uk-text-center uk-position-relative">

        <ul class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom" uk-margin>
          <li>
            <span>Version 0.8</span>
          </li>
          <li>
            <a class="uk-text-lowercase uk-text-middle" href="https://twitter.com/vuikit">
              <vk-icon icon="twitter" /> @vuikit
            </a>
          </li>
        </ul>

        <!-- <vk-button-link
          href="./v0.6"
          class="tm-button-default uk-position-center-right uk-position-medium uk-visible@m"
        >
          Vuikit 0.6 <vk-icon icon="arrow-right" />
        </vk-button-link> -->

      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
