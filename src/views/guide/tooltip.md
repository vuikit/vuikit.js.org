# Tooltip

<p class="uk-text-lead">Easily create a nice looking tooltip.</p>

## Usage

Set the `v-vk-tooltip` directive with a `title` to apply a tooltip to an element.

```html
<span v-vk-tooltip="'Hello World'"></span>
```

```example
<vk-button v-vk-tooltip="'Hello World'">Hover</vk-button>
```

==Note== `title` is the _primary_ option and its key may be omitted if it's the only option in the directive value.

***

## Alignment

Change the tooltip default alignment with a modifier or an option, where the later takes preference. The default value is `top`.

```html
<vk-button v-vk-tooltip.topLeft="'Hello World'"></vk-button>
```

| Position | Description |
|:---------|:------------|
| `top`         | Aligns the tooltip to the top.          |
| `topLeft`     | Aligns the tooltip to the top left.     |
| `topRight`    | Aligns the tooltip to the top right.    |
| `bottom`      | Aligns the tooltip to the bottom.       |
| `bottomLeft`  | Aligns the tooltip to the bottom left.  |
| `bottomRight` | Aligns the tooltip to the bottom right. |
| `left`        | Aligns the tooltip to the left.         |
| `right`       | Aligns the tooltip to the right.        |

```example
<p v-vk-margin>
  <vk-button v-vk-tooltip="'Hello World'">Top</vk-button>
  <vk-button v-vk-tooltip.topLeft="'Hello World'">Top Left</vk-button>
  <vk-button v-vk-tooltip.topRight="'Hello World'">Top Right</vk-button>
  <vk-button v-vk-tooltip.bottom="'Hello World'">Bottom</vk-button>
  <vk-button v-vk-tooltip.bottomLeft="'Hello World'">Bottom Left</vk-button>
  <vk-button v-vk-tooltip.bottomRight="'Hello World'">Bottom Right</vk-button>
  <vk-button v-vk-tooltip.left="'Hello World'">Left</vk-button>
  <vk-button v-vk-tooltip.right="'Hello World'">Right</vk-button>
</p>
```

***

## Animation

Use one of the animations from the [UIkit Animation component](https://getuikit.com/docs/animation) with the `animation` option to customize the in and out animations, without prefixes. Separate the animation out with a space and control the duration with the `duration` option.

```html
<div v-vk-tooltip="{ 
  title: 'Hello World', 
  animation: 'scale-up fade', 
  duration: 1000 
}"></div>
```

```example
<vk-button 
  v-vk-tooltip="{ 
    title: 'Hello World', 
    animation: 'scale-up fade', 
    duration: 300
  }"
>
  Hover
</vk-button>
```

***

## Delay

If you want the tooltip to appear with a little delay, add the `delay` option in milliseconds.

```html
<div v-vk-tooltip="{ title: 'Hello World', delay: 500 }"></div>
```

```example
<vk-button v-vk-tooltip="{ title: 'Hello World', delay: 500 }">Hover</vk-button>
```

***

## Options

| Name | Type  | Default | Description |
|------|-------|---------|-------------|
| `title`     | String | -- | Tooltip main text. Is the _primary_ option.  |
| `position`  | String | `top` | Tooltip position relative to the element. |
| `offset`    | Number | `false` | The offset of the Tooltip. |
| `animation` | String | `scale-up` | The display animations. Comma separate for animation out. |
| `duration`  | Number | `100` | The animation duration. |
| `delay`     | Number | `0` | The show delay. |
| `cls`       | String | `uk-active` | The active class. |

==Note== You can learn about directives and how to apply options at the [Directives guide](directives).
