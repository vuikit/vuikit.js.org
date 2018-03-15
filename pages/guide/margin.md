# Margin

<p class="uk-text-lead">A directive to automatically add spacing between elements.</p>

==Note== For a complete reference on margin utility classes please refer to [UIkit Margin](https://getuikit.com/docs/margin) guide.

## Usage

To add spacing to stacking elements, for example inline elements that wrap on smaller viewports, add the `v-vk-margin` directive to their parent container. It will automatically add the `.uk-margin-small-top` class to the lower element.

```html
<div v-vk-margin>
  <button></button>
  <button></button>
</div>
```

```example
<div v-vk-margin>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
  <vk-button>Button</vk-button>
</div>
```

***

## Options

| Name | Type  | Default | Description |
|------|-------|---------|-------------|
| `margin` | String | `uk-margin-small-top` | The class that is added to items that break into the next row, typically to create margin to the previous row. |
| `firstColumn` | String | `uk-first-column` | The class that is added to the first element in each row. |

==Note== You can learn about directives and how to apply options at the [Directives guide](directives).
