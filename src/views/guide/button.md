# Button

<p class="uk-text-lead">Easily create nice looking buttons, which come in different styles.</p>

## Usage

A standard button can be rendered with `vk-button` while an anchor with a button style by using `vk-button-link` components. It is also possible to render a button with a style of an anchor!

```html
<vk-button></vk-button>
<vk-button disabled></vk-button>
<vk-button-link href></vk-button-link>
```

```example
<p v-vk-margin>
  <vk-button>Button</vk-button>
  <vk-button disabled>Disabled</vk-button>
  <vk-button-link href="#">Link</vk-button-link>
</p>
```

==Note== If you are displaying a number of buttons in a row, you can add a top margin to them, when they stack on smaller viewports, by adding the [Margin directive](margin) to their parent element.

***

## Style modifiers

There are several style modifiers applied with the `type` prop.

| Class | Description |
|:------|:------------|
| `primary` | Indicates the primary action. |
| `secondary` | Indicates an important action. |
| `danger` | Indicates a dangerous or negative action. |
| `text` | Applies an alternative, typographic style. |
| `link` | Makes a `<button>` look like an `<a>` element. |

```html
<vk-button type="primary"></vk-button>
```

```example
<p v-vk-margin>
  <vk-button>Default</vk-button>
  <vk-button type="primary">Primary</vk-button>
  <vk-button type="secondary">Secondary</vk-button>
  <vk-button type="danger">Danger</vk-button>
  <vk-button type="text">Text</vk-button>
  <vk-button type="link">Link</vk-button>
</p>
```

***

## Size modifiers

Use the `size` prop to make the button `small` or `large`.

```html
<vk-button size="small"></vk-button>
<vk-button size="large"></vk-button>
```

```example
<p v-vk-margin>
  <vk-button size="small">Small button</vk-button>
  <vk-button type="primary" size="small">Small button</vk-button>
  <vk-button type="secondary" size="small">Small button</vk-button>
</p>

<p v-vk-margin>
  <vk-button size="large">Large button</vk-button>
  <vk-button type="primary" size="large">Large button</vk-button>
  <vk-button type="secondary" size="large">Large button</vk-button>
</p>
```

***

## Width modifiers

Add the `.uk-width-1-1` class from the [UIkit Width component](https://getuikit.com/docs/width) and the button will take up full width.

```example
<vk-button class="uk-width-1-1 uk-margin-small-bottom">Button</vk-button>
<vk-button type="primary" class="uk-width-1-1 uk-margin-small-bottom">Button</vk-button>
<vk-button type="secondary" class="uk-width-1-1">Button</vk-button>
```

***

## Group

To create a button group, use the `vk-button-group` component around the buttons.

```html
<vk-button-group>
  <vk-button></vk-button>
  <vk-button></vk-button>
  <vk-button></vk-button>
</vk-button-group>
```

```example
<div>
  <vk-button-group>
    <vk-button type="secondary">Button</vk-button>
    <vk-button type="secondary">Button</vk-button>
    <vk-button type="secondary">Button</vk-button>
  </vk-button-group>
</div>

<div class="uk-margin-small">
  <vk-button-group>
    <vk-button type="primary">Button</vk-button>
    <vk-button type="primary">Button</vk-button>
    <vk-button type="primary">Button</vk-button>
  </vk-button-group>
</div>

<div>
  <vk-button-group>
    <vk-button type="danger">Button</vk-button>
    <vk-button type="danger">Button</vk-button>
    <vk-button type="danger">Button</vk-button>
  </vk-button-group>
</div>
```

***

## Button with dropdowns

A button can be used to trigger a dropdown menu from the [Dropdown component](dropdown).

```html
<!-- the button toggling the dropdown -->
<vk-button></vk-button>
<vk-dropdown></vk-dropdown>
```

```example
<div class="uk-inline">
  <vk-button>Dropdown</vk-button>
  <vk-dropdown>
    <vk-nav-dropdown>
      <vk-nav-item title="Active" active></vk-nav-item>
      <vk-nav-item title="Item"></vk-nav-item>
      <vk-nav-item-header title="Header"></vk-nav-item-header>
      <vk-nav-item title="Item"></vk-nav-item>
      <vk-nav-item title="Item"></vk-nav-item>
      <vk-nav-item-divider></vk-nav-item-divider>
      <vk-nav-item title="Item"></vk-nav-item>
    </vk-nav-dropdown>
  </vk-dropdown>
</div>
```

***

### Button group with dropdowns

Use button groups to split buttons into a standard action on the left and a dropdown toggle on the right. Just wrap the toggling button and the drop or dropdown inside a `<div>` element and add the `.uk-inline` class from the [UIkit Utility component](https://getuikit.com/docs/utility#inline).

```html
<!-- a button group with a dropdown -->
<vk-button-group ref="group">
  <vk-button></vk-button>
  <div class="uk-inline">
    <!-- the button toggling the dropdown -->
    <vk-button></vk-button>
    <vk-dropdown mode="click" boundary="group" boundary-align></vk-dropdown>
  </div>
</vk-button-group>
```

```example
<vk-button-group ref="group">
  <vk-button>Dropdown</vk-button>
  <div class="uk-inline">
    <vk-button>
      <vk-icon icon="triangle-down"></vk-icon>
    </vk-button>
    <vk-dropdown mode="click" boundary="group" boundary-align>
      <vk-nav-dropdown>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-nav-dropdown>
    </vk-dropdown>
  </div>
</vk-button-group>
```

***

## Props

### vk-button / vk-button-link

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `active` | Boolean | `false` | Determines whether the button is active. |
| `size`   | String  | --      | Determines the button size as `small` or `large`. |
| `type`   | String  | --      | Determines the button style as `primary`, `secondary`, `danger`, `text` or `link`. |

### vk-button specific

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `htmlType` | String | `button` | Determines the button native type `button`, `submit` or `reset`. |
