<template>
  <div class="tm-section-texture uk-light">
    <div class="uk-section uk-flex uk-flex-middle uk-text-center" v-vk-height-viewport.offsetTop>
      <div class="uk-width-1-1">
        <div class="uk-container">

          <p class="uk-margin-large-bottom">
            <img src="@/assets/images/download.svg">
          </p>

          <h1>Thanks for giving Vuikit a try</h1>

          <p class="uk-margin-medium-bottom uk-text-large">
            Please share the love on Twitter or Facebook. <br class="uk-visible@s">
          </p>

          <vk-grid class="uk-grid-medium uk-child-width-auto uk-flex-inline">
            <div>
              <vk-button-link
                size="large"
                class="tm-button-primary"
                :href="twitterShare"
                target="_blank"
                type="primary"
              >
                <vk-icon icon="twitter" class="uk-margin-small-right"></vk-icon>
                <span class="uk-text-middle">Share on Twitter</span>
              </vk-button-link>
            </div>
            <div>
              <vk-button-link
                size="large"
                class="tm-button-primary"
                :href="fbShare"
                target="_blank"
                type="primary"
              >
                <vk-icon icon="facebook" class="uk-margin-small-right"></vk-icon>
                <span class="uk-text-middle">Post on Facebook</span>
              </vk-button-link>
            </div>
          </vk-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    twitterShare () {
      const text = `I'm excited to try Vuikit, a responsive UI library for @vuejs. Check it out at http://vuikit.js.org #vuejs`
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    },
    fbShare () {
      return `https://www.facebook.com/sharer/sharer.php?u=https://vuikit.js.org`
    }
  },
  methods: {
    retrieveReleases (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'https://api.github.com/repos/vuikit/vuikit/releases')
      xhr.onload = () => cb(xhr)
      xhr.send()
    }
  },
  created () {
    this.retrieveReleases(xhr => {
      let link = 'https://github.com/vuikit/vuikit/releases/latest'

      if (xhr.status === 200) {
        const releases = JSON.parse(xhr.responseText)
        const latestRelease = releases.shift()

        if (latestRelease.assets.length) {
          link = latestRelease.assets[0].browser_download_url
        }
      }

      // start download
      location.href = link
    })
  }
}
</script>
