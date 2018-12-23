# Offcanvas

<p class="uk-text-lead">Create an offcanvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.</p>

## Usage

Use the `vk-offcanvas` component to render an offcanvas sidebar and an optional overlay that blanks out the page. The offcanvas display is controlled with the `show` prop.

```html
<vk-offcanvas-content>
  
  <!-- the whole content goes here -->

  <vk-offcanvas show>
    <vk-offcanvas-close></vk-offcanvas-close>
  </vk-offcanvas>
  
</vk-offcanvas-content>
```

```example
---
show: false
---

<vk-offcanvas-content>
  <vk-button @click="show = !show" class="uk-margin-small-right">Open</vk-button>
  <a @click="show = !show">Open</a>

  <vk-offcanvas :show.sync="show">
    <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </vk-offcanvas>
</vk-offcanvas-content>
```

==Note== In the demo we are setting the `show` prop with a [sync modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to give the offcanvas the possibility to control the display.

***

### Overlay

To add an overlay, blanking out the page, add the `overlay` prop.

```html
<vk-offcanvas overlay>...</vk-offcanvas>
```

```example
---
show: false
---

<vk-offcanvas-content>
  <vk-button @click="show = true">Open</vk-button>

  <vk-offcanvas overlay :show.sync="show">
    <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </vk-offcanvas>
</vk-offcanvas-content>
```

***

## Flip modifier

Add the `flipped` prop to adjust the offcanvas alignment, so that it slides in from the right.

```html
<vk-offcanvas flipped>...</vk-offcanvas>
```

```example
---
show: false
---

<vk-offcanvas-content>
  <vk-button @click="show = true">Open</vk-button>

  <vk-offcanvas flipped overlay :show.sync="show">
    <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </vk-offcanvas>
</vk-offcanvas-content>
```

***

## Animation modes

By default, the offcanvas slides in. But you can actually choose between different animation modes for the offcanvas' entrance. Just set the prop `mode` with one of the following options.

| Mode | Description |
|:-----|:------------|
| `slide`  | The offcanvas slides out and overlays the content. This is the default mode. |
| `push`   | The offcanvas slides out and pushes the site. |
| `reveal` | The offcanvas slides out and reveals its content while pushing the site. |
| `none`   | The offcanvas appears and overlays the content without an animation. |

```html
<vk-offcanvas mode="push">...</vk-offcanvas>
```

```example
---
slide: false
push: false
reveal: false
none: false
---

<vk-offcanvas-content>

  <vk-button class="uk-margin-right-small" @click="slide = true">Slide</vk-button>
  <vk-button class="uk-margin-right-small" @click="push = true">Push</vk-button>
  <vk-button class="uk-margin-right-small" @click="reveal = true">Reveal</vk-button>
  <vk-button @click="none = true">None</vk-button>

  <vk-offcanvas overlay mode="slide" :show.sync="slide">
    <vk-offcanvas-close @click="slide = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </vk-offcanvas>

  <vk-offcanvas overlay mode="push" :show.sync="push">
    <vk-offcanvas-close @click="push = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </vk-offcanvas>
  
  <vk-offcanvas overlay mode="reveal" :show.sync="reveal">
    <vk-offcanvas-close @click="reveal = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </vk-offcanvas>

  <vk-offcanvas overlay mode="none" :show.sync="none">
    <vk-offcanvas-close @click="none = false"></vk-offcanvas-close>
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </vk-offcanvas>
  
</vk-offcanvas-content>
```

***

## Nav in Offcanvas

You can use the [Nav component](nav) inside an offcanvas to create a mobile navigation.

```html
<vk-offcanvas>
  <vk-nav>...</vk-nav>
</vk-offcanvas>
```

```example
---
primaryNav: false
defaultNav: false
---

<vk-offcanvas-content>
  <vk-button @click="primaryNav = true">Primary Nav</vk-button>
  <vk-button @click="defaultNav = true">Default Nav</vk-button>

  <vk-offcanvas overlay :show.sync="primaryNav">
    <vk-offcanvas-bar class="uk-flex uk-flex-column">
      <vk-nav type="primary" center class="uk-margin-auto-vertical">
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item-parent title="Parent">
          <vk-nav-item title="Sub Item"></vk-nav-item>
          <vk-nav-item title="Sub Item"></vk-nav-item>
        </vk-nav-item-parent>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item" icon="table"></vk-nav-item>
        <vk-nav-item title="Item" icon="thumbnails"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item" icon="trash"></vk-nav-item>
      </vk-nav>
    </vk-offcanvas-bar>
  </vk-offcanvas>
  
  <vk-offcanvas overlay :show.sync="defaultNav">
    <vk-nav class="uk-margin-auto-vertical">
      <vk-nav-item title="Active" active></vk-nav-item>
      <vk-nav-item-parent title="Parent">
        <vk-nav-item title="Sub Item"></vk-nav-item>
        <vk-nav-item title="Sub Item"></vk-nav-item>
      </vk-nav-item-parent>
      <vk-nav-item-header title="Header"></vk-nav-item-header>
      <vk-nav-item title="Item" icon="table"></vk-nav-item>
      <vk-nav-item title="Item" icon="thumbnails"></vk-nav-item>
      <vk-nav-item-divider></vk-nav-item-divider>
      <vk-nav-item title="Item" icon="trash"></vk-nav-item>
    </vk-nav>
  </vk-offcanvas>

</vk-offcanvas-content>
```

***

## Props

### vk-offcanvas

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show`    | Boolean | `false` | The display state. |
| `stuck`   | Boolean | `false` | Determines if the modal should be kept open when the background was clicked. |
| `flipped` | Boolean | `false` | Changes the offcanvas alignment so that it slides in from the right. |
| `overlay` | Boolean | `false` | Displays an overlay blanking out the page. |
| `mode`    | String  | `slide` | The animation mode with options as `none`, `slide`, `push` or `reveal`. |

### vk-modal-close

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `large`   | Boolean | `false` | Displays a larger icon. |
