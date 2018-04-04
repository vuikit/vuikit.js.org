# Integration

<p class="uk-text-lead">Integrate Vuikit into your project.</p>

Assuming you are already familiar with Vue installation lets see the different ways to integrate Vuikit to it. If you are not or need some refreshing, please check the [Vue documentation](https://vuejs.org/v2/guide/installation.html).

***

## With Build Tools

When using a build tool like Webpack or Browserify, you would typically use [Npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com) to install the project dependencies. This would also provide you with the pre-built source files. Because of its ease of use and flexibility, this is the recommended way for a typical web project.

```bash
npm install vue
npm install vuikit
npm install @vuikit/icons
npm install @vuikit/theme
```

```js
// later in your source files
import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
```

```js
// You may as well lower the bundle size by
// cherry-picking only the resources you need
import Vue from 'vue'
import { Card } from 'vuikit/lib/card'
import { Button, ButtonLink } from 'vuikit/lib/button'

// register globally
Vue.component('Card', Card)

export default {
  // or locally
  components: {
    VkButton: Button,
    VkButtonLink: ButtonLink
  },
  template: `<vk-card>
    <vk-button>...</vk-button>
  </vk-card>`
}
```

***

## Without Build Tools

If you are including Vue via a script tag without a build tool, first of all [download](/download) the Vuikit main package. The Zip file contains the compiled CSS and JavaScript files, which is everything you need to get started. 

### Package contents

| Folder | Description |
|:-------|:------------|
| `/css` | Contains the Vuikit CSS. |
| `/js`  | Contains the Vuikit JavaScript and the Icon Library JavaScript. |

### HTML markup

Add the compiled and minified CSS and JavaScript to the header of your HTML5 document for production. Also include the Vuikit Icon library if required. For a basic setup, that's it.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/vuikit.min.css" />
    <script src="js/vue.min.js"></script>
    <script src="js/vuikit.min.js"></script>
    <script src="js/vuikit-icons.min.js"></script>
  </head>
  <body>
    <div id="app">
      <vk-card>
        <vk-button>...</vk-button>
      </vk-card>
    </div>
    <script>
      new Vue({ el: '#app' })
    </script>
  </body>
</html>
```
