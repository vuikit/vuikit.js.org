# Icon

<p class="uk-text-lead">Place scalable vector icons anywhere in your content.</p>

Vuikit provides a comprehensive [SVG icon library](icons#library), which comprises a considerate number of elegant outline icons. This component render those icons with specific styles so they inherit color just like your text does.

***

## Usage

Use the `vk-icon` or `vk-icon-link` components specifying the icon name in the `icon` prop.

```html
<vk-icon icon="check"></vk-icon>

<vk-icon-link href icon="heart"></vk-icon-link>
```

```example
<vk-icon icon="check" class="uk-margin-small-right"></vk-icon>

<vk-icon-link href="#" icon="heart"></vk-icon-link>
```

==Note== Make sure to integrate the icons library or register the icons beforehand, for more details see the [Icons guide](icons).

***

## Ratio

Add the `:ratio="2"` prop to double its size – or any other number, depending on how big you want you icon to be.

```html
<vk-icon icon="check" ratio="2"></vk-icon>
```

```example
<vk-icon class="uk-margin-small-right" icon="check" ratio="2"></vk-icon>
<vk-icon icon="check" ratio="3.5"></vk-icon>
```

***

## Link reset

To reset the default link styling to a more muted color when using an icon inside an anchor, use the `vk-icon-link` component.

```html
<vk-icon-link reset href icon="heart"></vk-icon-link>
```

```example
<vk-icon-link reset href="#" class="uk-margin-small-right" icon="copy"></vk-icon-link>
<vk-icon-link reset href="#" class="uk-margin-small-right" icon="file-edit"></vk-icon-link>
<vk-icon-link reset href="#" icon="trash"></vk-icon-link>
```

***

## Button variation

Use the `vk-icon-button` component to render an icon button, which can be used for social icons.

```html
<vk-icon-button href="" icon="twitter"></vk-icon-button>
```

```example
<vk-icon-button href="#" class="uk-margin-small-right" icon="twitter"></vk-icon-button>
<vk-icon-button href="#" class="uk-margin-small-right" icon="facebook"></vk-icon-button>
<vk-icon-button href="#" icon="google-plus"></vk-icon-button>
```

***

## Image variation

You can also make any background image scale to the size of an icon. Use the `vk-icon-image` component and a background image path.

```example
<vk-icon-image src="/images/guide/dark.jpg"></vk-icon-image>
```

***

## Props

### vk-icon

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | String | -- | The icon to display. |
| `ratio` | String, Number | `1` | The icon size ratio. |

### vk-icon-button

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | String | -- | The icon to display. |
| `href` | String | -- | The link anchor href property. |
| `ratio` | String, Number | `1` | The icon size ratio. |

### vk-icon-link 

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | String | -- | The icon to display. |
| `href` | String | -- | The link anchor href property. |
| `ratio` | String, Number | `1` | The icon size ratio. |
| `reset` | Boolean | `false` | Resets link styling to a more muted color. |

### vk-icon-image 

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `src` | String | -- | The image to display. |

***

==Note== `width`, `height` and `viewBox` attributes will be passed on to the SVG making it possible to fine tune the icon display.
