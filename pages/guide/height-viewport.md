# HeightViewport

Add the `v-vk-height-viewport` directive to an element to expand it height as of the entire viewport. You can change the height behavior by setting the `offset-top`, `offset-bottom` or `expand` options.

```html
<div v-vk-height-viewport></div>

<div v-vk-height-viewport.offsetTop></div>

<div v-vk-height-viewport="{ offsetBottom: 20 }"></div>

<div v-vk-height-viewport.expand></div>

<div v-vk-height-viewport="{ min-height: 300 }"></div>
```

***

## Options

| Name | Type  | Default | Description |
|------|-------|---------|-------------|
| `offsetTop` | Boolean | `false` | Subtracts the element's top offset from its height. |
| `offsetBottom` | Boolean, Number, Pixel | `false` | Subtracts the element's immediately following sibling's height from its own height. |
| `expand` | Boolean | `true` | Expand the element's height to make a short page fill the viewport. |
| `minHeight` | Number | `0` | Sets a minimum height. Useful if the all children are positioned absolute. |

==Note== You can learn about directives and how to apply options at the [Directives guide](directives).
