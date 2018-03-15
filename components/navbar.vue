<template>
  <vk-navbar-full expanded class="tm-navbar-container">
    <vk-navbar-item>
      <router-link tag="vk-navbar-logo" to="/">
        <img src="~/assets/images/vuikit-logo.svg" />uikit
      </router-link>
    </vk-navbar-item>

    <vk-navbar-item slot="right">
      <vk-navbar-nav class="uk-visible@m">
        <router-link to="/guide" tag="li"><a>Guide</a></router-link>
        <router-link to="/roadmap" tag="li"><a>Roadmap</a></router-link>
      </vk-navbar-nav>

      <vk-navbar-item class="uk-visible@m">
        <router-link
          class="uk-button uk-button-default tm-button-default uk-icon"
          to="/download"
          activeClass="page-active"
        >
          Download <vk-icon icon="download"></vk-icon>
        </router-link>
      </vk-navbar-item>

      <vk-navbar-toggle class="uk-hidden@m" @click="$emit('menu')" />
    </vk-navbar-item>
  </vk-navbar-full>
</template>
