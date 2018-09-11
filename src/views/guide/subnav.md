# Subnav

<p class="uk-text-lead">Defines different styles for a sub navigation.</p>

## Usage

Use the `vk-subnav` component with `vk-subnav-item` as items within the list.

```html
<vk-subnav>
  <vk-subnav-item title></vk-subnav-item>
  <vk-subnav-item title></vk-subnav-item>
  <vk-subnav-item title disabled></vk-subnav-item>
</vk-subnav>
```

```example
<vk-subnav v-vk-margin>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Disabled" disabled></vk-subnav-item>
</vk-subnav>
```

==Note== For a better layout, if items should wrap into the next row, use the [Margin directive](margin).

***

## Divided modifier

Set the `divided` prop to separate menu items with lines.

```html
<vk-subnav divided>...</vk-subnav>
```

```example
<vk-subnav divided v-vk-margin>
  <vk-subnav-item title="Item" active href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
</vk-subnav>
```

***

## Pill modifier

Set the `pill` prop to highlight the active menu item with a background.

```html
<vk-subnav pill>...</vk-subnav>
```

```example
<vk-subnav pill v-vk-margin>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
</vk-subnav>
```

***

## Subnav with Dropdown

You can also use a dropdown from the [Dropdown component](dropdown) with `vk-subnav-item-dropdown`.

```html
<vk-subnav>
  <vk-subnav-item-dropdown title>
    <vk-nav-dropdown>...</vk-nav-dropdown>
  </vk-subnav-item-dropdown>
</vk-subnav>
```

```example
<vk-subnav pill v-vk-margin>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item title="Item" href="#"></vk-subnav-item>
  <vk-subnav-item-dropdown title="Item">
    <vk-nav-dropdown>
      <vk-nav-item href="#" title="Active"></vk-nav-item>
      <vk-nav-item href="#" title="Item"></vk-nav-item>
      <vk-nav-item-header title="Header"></vk-nav-item-header>
      <vk-nav-item href="#" title="Item"></vk-nav-item>
      <vk-nav-item href="#" title="Item"></vk-nav-item>
      <vk-nav-item-divider></vk-nav-item-divider>
      <vk-nav-item href="#" title="Item"></vk-nav-item>
    </vk-nav-dropdown>
  </vk-subnav-item-dropdown>
</vk-subnav>
```

***

## Sync active item

By default the active item state is internal but you can sync it with your context using the `active-item` prop. To easier identify the items set a unique key to each of them, otherwise they id will default to their `index`.

```html
<vk-subnav :active-item.sync>
  <vk-subnav-item title key="first"></vk-subnav-item>
  <vk-subnav-item title key="second"></vk-subnav-item>
  <vk-subnav-item title key="third"></vk-subnav-item>
</vk-subnav>
```


```example
---
activeItem: 'second'
---

<vk-subnav :active-item.sync="activeItem">
  <vk-subnav-item title="Item" key="first"></vk-subnav-item>
  <vk-subnav-item title="Item" key="second"></vk-subnav-item>
  <vk-subnav-item title="Item" key="third"></vk-subnav-item>
</vk-subnav>

<p>Active item is: {{ activeItem }}</p>
```

***

## Props

### vk-subnav

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `activeItem` | String, Number | -- | The currently active item. If omitted, the active state will remain internal. |
| `divided` | Boolean | `false` | Displays modifier that separate the items with lines. |
| `pill` | Boolean | `false` | Displays modifier that highlight the active item with a background. |

### vk-subnav-item

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | -- | The title to display. |
| `active` | Boolean | `false` | Displays the item as active. |
| `disabled` | Boolean | `false` | Displays the item as disabled. |

### vk-subnav-item-dropdown

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | -- | The title to display. |
| `disabled` | Boolean | `false` | Displays the item as disabled. |
| `disabled` | Boolean | `false` | Displays the item as disabled. |
| ... | -- | -- | This component inherits the [Drop Component](drop#props) props. |
