<template>
  <div class="uk-preserve-color">
    <div class="uk-section">
      <div class="uk-container uk-container-small">

        <vk-card>
          <h1 class="uk-margin-medium uk-text-center">Roadmap</h1>
          <p class="uk-text-lead">Where are we headed</p>
          <p>
            Vuikit is a big undertake and there are many features to port yet on as well as new ideas.
            This roadmap gives some perspective on the work ahead which. If you consider a feature
            is missing or have some feedback, please <a href="https://github.com/vuikit/vuikit/issues" target="_blank">open a ticket</a>.
          </p>

          <h2 class="uk-h3">By priority</h2>
          <ul class="uk-list">
            <li>Document Vuikit specific components</li>
            <li>Work on Tabs responsiveness</li>
            <li>Port missing features
              <ul class="uk-list">
                <li><a href="https://getuikit.com/docs/nav#accordion">Nav Accordion</a></li>
                <li><a href="https://getuikit.com/docs/navbar#sticky-navbar">Sticky Navbar</a></li>
                <li><a href="https://getuikit.com/docs/card#horizontal-alignment">Card Horizontal Alignment</a></li>
              </ul>
            </li>
            <li>Evaluate porting the rest of UIkit components:
              <ul class="uk-list">
                <li><a href="https://getuikit.com/docs/animation">Animation</a></li>
                <li><a href="https://getuikit.com/docs/progress">Progress</a></li>
                <li><a href="https://getuikit.com/docs/alert">Alert</a></li>
                <li>...</li>
              </ul>
            </li>
            <li>Add Datepicker (create own styles if UIkit doesn't support it yet)</li>
          </ul>

          <p>
            <vk-label>Note</vk-label> This list is just for orientation purpose and it could change in any moment.
          </p>
        </vk-card>

      </div>
    </div>
  </div>
</template>
