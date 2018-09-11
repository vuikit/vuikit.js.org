# Tabs

<p class="uk-text-lead">Create a tabbed navigation with different styles.</p>

## Usage

Use the `vk-tabs` together with `vk-tabs-item` to render a list of clickable tabs associated with a specific content.

```html
<vk-tabs>
  <vk-tabs-item title></vk-tabs-item>
  <vk-tabs-item title></vk-tabs-item>
  <vk-tabs-item title disabled></vk-tabs-item>
</vk-tabs>
```

```example
<vk-tabs>
  <vk-tabs-item title="Item">Hello!</vk-tabs-item>
  <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
  <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
  <vk-tabs-item title="Disabled" disabled icon="lock"></vk-tabs-item>
</vk-tabs>
```

***

## Flipped modifier

Set the `flipped` prop to flip tab items to the bottom.

```html
<vk-tabs flipped>...</vk-tabs>
```

```example
<vk-tabs flipped>
  <vk-tabs-item title="Item">Hello!</vk-tabs-item>
  <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
  <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
</vk-tabs>
```

***

## Alignment

Set the `align` prop to `center`, `right` or `justify` to modify the alignment of the navigations.

```html
<vk-tabs align>...</vk-tabs>
```

```example
<div class="uk-margin-medium-top">
  <vk-tabs align="center">
    <vk-tabs-item title="Center">Hello!</vk-tabs-item>
    <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
    <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
  </vk-tabs>
</div>

<div class="uk-margin-medium-top">
  <vk-tabs align="right">
    <vk-tabs-item title="Right">Hello!</vk-tabs-item>
    <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
    <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
  </vk-tabs>
</div>

<div class="uk-margin-medium-top">
  <vk-tabs align="justify">
    <vk-tabs-item title="Justify">Hello!</vk-tabs-item>
    <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
    <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
  </vk-tabs>
</div>
```

***

## Vertical variation

Use `vk-tabs-vertical` to renders tabs displayed vertically to the left or right side. 

```html
<vk-tabs-vertical align="left">...</vk-tabs-vertical>

<vk-tabs-vertical align="right">...</vk-tabs-vertical>
```

```example
<vk-grid class="uk-child-width-1-2@s">
  <div>
    <vk-tabs-vertical align="left">
      <vk-tabs-item title="Left">Hello!</vk-tabs-item>
      <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
      <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
    </vk-tabs-vertical>
  </div>

  <div>
    <vk-tabs-vertical align="right">
      <vk-tabs-item title="Right">Hello!</vk-tabs-item>
      <vk-tabs-item title="Item">Hello again!</vk-tabs-item>
      <vk-tabs-item title="Item">Bazinga!</vk-tabs-item>
    </vk-tabs-vertical>
  </div>
</vk-grid>
```

***

## Props

### vk-tabs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `align` | String | `left` | The tabs alignment with `left`, `right`, `center` and `justify` as options. |
| `flipped` | Boolean | false | Displays the tabs at the bottom of the content. |

### vk-tabs-vertical

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `align` | String | `left` | The tabs alignment, `left` or `right`. |

### vk-tabs-item

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon`  | String | -- | The icon to display. |
| `title` | String | -- | The title to display. |
| `disabled` | Boolean | `false` | Displays the item as disabled. |
