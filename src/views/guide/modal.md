# Modal

<p class="uk-text-lead">Create modal dialogs with different styles and transitions.</p>

## Usage

Use the `vk-modal` component to render a modal and an overlay that blanks out the page. The modal display is controlled with the `show` prop.

```html
<vk-modal show>
  <vk-modal-title></vk-modal-title>
</vk-modal>
```

```example
---
show: false
---

<!-- a button toggling the modal -->
<vk-button class="uk-margin-small-right" @click="show = true">Open</vk-button>

<!-- an anchor toggling the modal -->
<a @click.prevent="show = true">Open</a>

<vk-modal :show.sync="show">
  <vk-modal-title>Headline</vk-modal-title>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p class="uk-text-right">
    <vk-button @click="show = false" class="uk-margin-small-right">Cancel</vk-button>
    <vk-button type="primary">Save</vk-button>
  </p>
</vk-modal>
```

==Note== In the demo we are setting the `show` prop with a [sync modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to give the modal the possibility to control the display.

***

## Close button

The `vk-modal-close` component renders a close button element that could be placed inside the modal. To place the close button outside the modal, add the `outside` prop.

```html
<vk-modal>
  <vk-modal-close></vk-button-close>
</vk-modal>

<vk-modal>
  <vk-modal-close outside></vk-button-close>
</vk-modal>
```

```example
---
show1: false
show2: false
---

<vk-button class="uk-margin-small-right" @click="show1 = true">Default</vk-button>

<vk-modal :show.sync="show1">
  <vk-modal-close @click="show1 = false"></vk-modal-close>
  <vk-modal-title>Default</vk-modal-title>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</vk-modal>

<vk-button @click="show2 = true">Outside</vk-button>

<vk-modal :show.sync="show2">
  <vk-modal-close outside @click="show2 = false"></vk-modal-close>
  <vk-modal-title>Outside</vk-modal-title>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</vk-modal>
```

***

## Center modal

To vertically center the modal dialog, add the `center` prop.

```html
<vk-modal center></vk-modal>
```

```example
---
show: false
---

<vk-button-link @click="show = true">Open</vk-button-link>

<vk-modal center :show.sync="show">
  <vk-modal-close @click="show = false"></vk-modal-close>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</vk-modal>
```

***

## Header and footer

To divide the modal into different content sections, use the `header` and `footer` slots.

```html
<vk-modal>
  <vk-modal-title slot="header"></vk-modal-title>
  <div></div>
  <div slot="footer"></div>
</vk-modal>
```

```example
---
show: false
---

<vk-button @click="show = true">Open</vk-button>

<vk-modal :show.sync="show">
  <vk-modal-close @click="show = false"></vk-modal-close>
  <vk-modal-title slot="header">Modal Title</vk-modal-title>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div slot="footer" class="uk-text-right">
    <vk-button class="uk-margin-small-right" @click="show = false">Cancel</vk-button>
    <vk-button type="primary">Save</vk-button>
  </div>
</vk-modal>
```

***

## Container modifier

Set the `size` prop to `container` to expand the modal dialog to the default container width.

```html
<vk-modal size="container">...</vk-modal>
```

```example
---
show: false
---

<vk-button @click="show = true">Open</vk-button>

<vk-modal size="container" :show.sync="show">
  <vk-modal-close @click="show = false"></vk-modal-close>
  <vk-modal-title>Headline</vk-modal-title>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</vk-modal>
```

***

## Full modifier

To create a modal that fills the entire page, use the `vk-modal-full` component. It is also recommended to use the `vk-modal-full-close` component for the close button, so that it adapts its styling.

```html
<vk-modal-full>
  <vk-modal-full-close></vk-modal-full-close>
  ...
</vk-modal-full>
```

Using the [grid](grid) and [UIkit width](https://getuikit.com/docs/width) classes, you can create a nice, split fullscreen modal.

```example
---
show: false
---

<vk-button @click="show = true">Open</vk-button>

<vk-modal-full :show.sync="show">
  <vk-modal-full-close large @click="show = false"></vk-modal-full-close>
  <vk-grid collapse class="uk-child-width-1-2@s uk-flex-middle">
    <div class="uk-background-cover" style="background-image: url('/images/guide/photo.jpg');" v-vk-height-viewport></div>
    <div class="uk-padding-large">
      <h1>Headline</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </vk-grid>
</vk-modal-full>
```

***

## Overflow

By default, the page will scroll with the modal if its content exceeds the window height. To apply a scrollbar inside the modal, set the `overflow-auto` prop.

```html
<vk-modal overflow-auto>...</vk-modal>
```

```example
---
show: false
---

<vk-button @click="show = true">Open</vk-button>

<vk-modal :show.sync="show" overflow-auto>
  <vk-modal-close @click="show = false"></vk-modal-close>
  <vk-modal-title slot="header">Headline</vk-modal-title>
  <p v-for="n in 10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <div slot="footer" class="uk-text-right">
    <vk-button class="uk-margin-small-right" @click="show = false">Cancel</vk-button>
    <vk-button type="primary">Save</vk-button>
  </div>
</vk-modal>
```

***

## Groups

You can group multiple modals by linking from one to the other and back. Use this to create multistep wizards inside your modals.

```html
<vk-modal :show="show1">
  <vk-button @click="show2 = true">Next</vk-button>
</vk-modal>

<vk-modal :show="show2">
  <vk-button @click="show1 = true">Previous</vk-button>
</vk-modal>
```

```example
---
show1: false
show2: false
---

<p v-vk-margin>
  <vk-button class="uk-margin-small-right" @click="show1 = true">Modal 1</vk-button>
  <vk-button @click="show2 = true">Modal 2</vk-button>
</p>

<vk-modal :show.sync="show1">
  <vk-modal-close @click="show1 = false"></vk-modal-close>
  <vk-modal-title slot="header">Headline 1</vk-modal-title>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <div slot="footer" class="uk-text-right">
    <vk-button class="uk-margin-small-right" @click="show1 = false">Cancel</vk-button>
    <vk-button type="primary" @click="show2 = true">Next</vk-button>
  </div>
</vk-modal>

<vk-modal :show.sync="show2">
  <vk-modal-close @click="show2 = false"></vk-modal-close>
  <vk-modal-title slot="header">Headline 2</vk-modal-title>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <div slot="footer" class="uk-text-right">
    <vk-button class="uk-margin-small-right" @click="show2 = false">Cancel</vk-button>
    <vk-button type="primary" @click="show1 = true">Previous</vk-button>
  </div>
</vk-modal>
```

***

## Props

### vk-modal, vk-modal-full

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show`   | Boolean | `false` | The display state. Keep it synced with `sync` binding modifier. |
| `stuck`  | Boolean | `false` | Determines if the modal should be kept open when the background was clicked. |
| `overflowAuto` | Boolean | `false` | Determines if the modal should auto-adjust the height overflow. |
| `center` | Boolean | `false` | Vertically centers the modal dialog. |
| `size`   | String | -- | Determines the modal dialog size. With options as `container` or some of the [UIkit width](https://getuikit.com/docs/width) classes. |
| `stack`  | Boolean | `false` | When a modal is stacked it will not close any previous modal when being displayed. |

### vk-modal-close

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `large`   | Boolean | `false` | Displays a larger icon. |
| `outside` | Boolean | `false` | Displays the icon outside the modal dialog. |

### vk-modal-full-close

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `large` | Boolean | `false` | Displays a larger icon. |
