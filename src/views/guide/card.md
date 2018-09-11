# Card

<p class="uk-text-lead">Create layout boxes with different styles.</p>

## Usage

The Card component consists of the card itself and an optional card title, typically arranged in grid columns from the [Grid component](grid).

```html
<vk-card>
  <vk-card-title></vk-card-title>
</vk-card>
```

```example
<vk-card class="uk-width-1-2@m">
  <vk-card-title>Default</vk-card-title>
  <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</vk-card>
```

***

## Style modifiers

There are several styles to apply to a card by setting the `type` prop, as well as remove all styling.

| Class | Description |
|:------|:------------|
| `default`   | Use this option to create a visually styled box. |
| `primary`   | Use this option to emphasize it with a primary color. |
| `secondary` | Use this option to give it a secondary background color. |
| `blank`     | Use this option to remove all styling. |

```html
<vk-card></vk-card>
<vk-card type="primary"></vk-card>
<vk-card type="secondary"></vk-card>
<vk-card type="blank"></vk-card>
```

```example
<vk-grid gutter="small" matched class="uk-child-width-1-3@m">
  <div>
    <vk-card>
      <vk-card-title>Default</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
  <div>
    <vk-card type="primary">
      <vk-card-title>Primary</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
  <div>
    <vk-card type="secondary">
      <vk-card-title>Secondary</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
</vk-grid>
```

***

## Hover modifier

To create a hover effect on the card, use the `hover` prop. This comes in handy when working with anchors and can be combined with the other card modifiers.

```html
<div class="uk-card uk-card-hover"></div>
```

```example
<vk-grid matched class="uk-child-width-1-2@s">
  <div>
    <vk-card type="blank" hover>
      <vk-card-title>Hover</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
  <div>
    <vk-card hover>
      <vk-card-title>Default</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
  <div>
    <vk-card type="primary" hover class="uk-light">
      <vk-card-title>Primary</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
  <div>
    <vk-card type="secondary" hover class="uk-light">
      <vk-card-title>Secondary</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </vk-card>
  </div>
</vk-grid>
```

***

## Size modifiers

You can apply different size modifiers to cards that will decrease or increase their padding. Use `small` or `large` as option for the `padding` prop.

```html
<vk-card padding="small"></vk-card>
<vk-card padding="large"></vk-card>
```

```example
<vk-grid class="uk-child-width-1-2@s">
  <div>
    <vk-card padding="small">
      <vk-card-title>Small</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </vk-card>
  </div>
  <div>
    <vk-card padding="large">
      <vk-card-title>Large</vk-card-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </vk-card>
  </div>
</vk-grid>
```

***

## Header & footer slots

With the `header` and `footer` slots you can also divide a card around the default body. 

```html
<vk-card>
  <div slot="header">
    <vk-card-title></vk-card-title>
  </div>
  <!-- default content -->
  <div></div>
  <div slot="footer"></div>
</vk-card>
```

```example
<vk-card class="uk-width-1-2@m">
  <div slot="header">
    <vk-grid gutter="small" class="uk-flex-middle">
      <div class="uk-width-auto">
        <img class="uk-border-circle" width="40" height="40" src="/images/guide/avatar.jpg">
      </div>
      <div class="uk-width-expand">
        <vk-card-title class="uk-margin-remove-bottom">Title</vk-card-title>
        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
      </div>
    </vk-grid>
  </div>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
  </div>
  <div slot="footer">
    <vk-button-link type="text" href="#">Read more</vk-button-link>
  </div>
</vk-card>
```

***

## Media slots

To display an image inside a card without any spacing, add one of the following classes to a `<div>` around the `<img>` element. Mind that you need to modify the source order accordingly.

| Class                   | Description                                                           |
|:------------------------|:----------------------------------------------------------------------|
| `media`        | This class indicates that the media element is aligned to the left.   |
| `media-top`    | This class indicates that the media element is aligned to the top.    |
| `media-bottom` | This class indicates that the media element is aligned to the bottom. |

```html
<vk-card>
  <div slot="media-top">
    <img src />
  </div>
  <div>...</div>
</vk-card>
```

```example
<vk-grid class="uk-child-width-1-2@m">
  <div>
    <vk-card>
      <div slot="media-top">
        <img src="/images/guide/light.jpg" alt="">
      </div>
      <div>
        <vk-card-title>Media Top</vk-card-title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    </vk-card>
  </div>
  <div>
    <vk-card>
      <div>
        <vk-card-title>Media Bottom</vk-card-title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div slot="media-bottom">
        <img src="/images/guide/light.jpg" alt="">
      </div>
    </vk-card>
  </div>
</vk-grid>
```

***

## Badge slot

To position a badge inside a card, place it under the `badge` slot. You can use one of the other components, for example the [Label](label), to style the badge.

```html
<vk-card>
  <vk-label slot="badge"></vk-label>
</vk-card>
```

```example
<vk-card class="uk-width-1-2@m">
  <vk-label slot="badge">Badge</vk-label>
  <vk-card-title>Title</vk-card-title>
  <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</vk-card>
```

***

## Props

### vk-card

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | String | -- | Style modifier with options as `default`, `primary` or `secondary`. |
| `padding` | String | -- | Padding modifier with options as `small` or `large`. |
| `hover` | Boolean | `false` | Enables the card hover effect. |

### vk-card-title

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | String | `h3` | Allows more control over the final rendered HTML tag for the title element. |
