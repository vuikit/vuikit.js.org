# Nav

<p class="uk-text-lead">Defines different styles for list navigations.</p>

## Usage

Use the `vk-nav` component combined with one of it sub components.

```html
<vk-nav>
  <vk-nav-item href title active></vk-nav-item>
  <vk-nav-item href title></vk-nav-item>
</vk-nav>
```

```example
<div class="uk-width-1-2@s uk-width-2-5@m">
  <vk-nav>
    <vk-nav-item href="#" title="Active" active></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
  </vk-nav>
</div>
```

***

## Nested navs

Use the `vk-nav-item-parent` component as a nesting parent for sub items.

```html
<vk-nav>
  <vk-nav-item-parent href title>
    <vk-nav-item href title></vk-nav-item>
    <vk-nav-item href title></vk-nav-item>
    <vk-nav-item-parent href title>...</vk-nav-item-parent>
  </vk-nav-item-parent>
</vk-nav>
```

```example
<div class="uk-width-1-2@s uk-width-2-5@m">
  <vk-nav>
    <vk-nav-item href="#" title="Active"></vk-nav-item>
    <vk-nav-item-parent href="#" title="Parent">
      <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
      <vk-nav-item-parent href="#" title="Sub Item">
        <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
        <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
      </vk-nav-item-parent>
    </vk-nav-item-parent>
  </vk-nav>
</div>
```

***

## Header & divider

Use one of the following components in a list to create a header or a divider between items.

```html
<vk-nav-item-header title></vk-nav-item-divider>

<vk-nav-item-divider title></vk-nav-item-divider>
```

```example
<div class="uk-width-1-2@s uk-width-2-5@m">
  <vk-nav>
    <vk-nav-item-header title="Header"></vk-nav-item-header>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
    <vk-nav-item-divider></vk-nav-item-divider>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
  </vk-nav>
</div>
```

***

## Type modifier

The `type` prop allows controlling the nav style. Set it as `primary` to give the nav a more distinct styling, for example when placing it inside a modal.

==Note== To remove all styling set the the prop with `blank` value.

```html
<vk-nav type="primary">...</vk-nav>
```

```example
<div class="uk-width-1-2@s">
  <vk-nav type="primary">
    <vk-nav-item href="#" title="Active" active></vk-nav-item>
    <vk-nav-item-parent href="#" title="Parent">
      <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
      <vk-nav-item-parent href="#" title="Sub item">
        <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
        <vk-nav-item href="#" title="Sub Item"></vk-nav-item>
      </vk-nav-item-parent>
    </vk-nav-item-parent>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
  </vk-nav>
</div>
```

***

## Center modifier

Set the `center` prop to center nav items. This can be combined with the default and primary style modifiers. You can place the nav inside cards or anywhere else in your content.

```html
<uk-nav center>...</uk-nav>
```

```example
<vk-card class="uk-width-1-2@s">
  <vk-nav center>
    <vk-nav-item href="#" title="Active" active></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
  </vk-nav>
</vk-card>
```

***

## Nav in Dropdown

Use the `vk-nav-dropdown` component to place a nav inside a default dropdown from the [Dropdown component](dropdown).

```html
<vk-dropdown>
  <vk-nav-dropdown>...</vk-nav-dropdown>
</vk-dropdown>
```

```example
<vk-button>Hover</vk-button>
<vk-dropdown>
  <vk-nav-dropdown>
    <vk-nav-item href="#" title="Active" active></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
    <vk-nav-item href="#" title="Item"></vk-nav-item>
    <vk-nav-item-header title="Header"></vk-nav-item-header>
    <vk-nav-item href="#" icon="table" title="Item"></vk-nav-item>
    <vk-nav-item href="#" icon="thumbnails" title="Item"></vk-nav-item>
    <vk-nav-item-divider></vk-nav-item-divider>
    <vk-nav-item href="#" icon="trash" title="Item"></vk-nav-item>
  </vk-nav-dropdown>
</vk-dropdown>
```

***

## Nav in Offcanvas

A nav can be used inside an offcanvas from the [Offcanvas component](offcanvas).

```example
---
show: false
---

<vk-offcanvas-content>
  <vk-button @click="show = !show">Open</vk-button>
  <vk-offcanvas :show.sync="show">
    <vk-nav class="uk-margin-auto-vertical">
      <vk-nav-item title="Active" active></vk-nav-item>
      <vk-nav-item title="Item"></vk-nav-item>
      <vk-nav-item-header title="Header"></vk-nav-item-header>
      <vk-nav-item title="Item"></vk-nav-item>
      <vk-nav-item title="Item"></vk-nav-item>
      <vk-nav-item-divider></vk-nav-item-divider>
      <vk-nav-item title="Item"></vk-nav-item>
    </vk-nav>
  </vk-offcanvas>
</vk-offcanvas-content>
```

***

## Props

### vk-nav

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `center` | Boolean | -- | Centers the items horizontally. |
| `type`   | String | 'default' | The nav style modifier, `default`, `primary` or 'blank'. |

### vk-nav-item

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon`  | String | -- | The icon to display. |
| `href`  | String | -- | The item anchor link. |
| `target` | String | -- | The item anchor target. |
| `title` | String | -- | The title to display. |
| `active` | Boolean | `false` | Displays the item as active. |

### vk-nav-item-parent

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `href`  | String | -- | The item anchor link. |
| `target` | String | -- | The item anchor target. |
| `title` | String | -- | The title to display. |

### vk-nav-item-header

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | -- | The title to display. |
