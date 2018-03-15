# HeightMatch

To expand all children of a container to the same height, regardless of their content – for example, inside a grid – use the `v-vk-height-match` directive. You can change the height matching behavior by setting the `target` or `row` options.

```html
<div v-vk-height-match="'.my-class'">
  <div></div>
  <div></div>
</div>
```

==Note== `target` is the _primary_ option and its key may be omitted if it's the only option in the directive value.

***

### Match cards

You can also target and match specific elements inside the container, like cards. Just add the `target: SELECTOR` option to the attribute.

```html
<vk-grid v-vk-height-match="{ target: SELECTOR }">...</vk-grid>
```

```example
<vk-grid class="uk-child-width-1-2@s" v-vk-height-match="'> div > .uk-card'">
  <div>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</vk-card>
  </div>
  <div>
    <vk-card>Lorem Ipsum</vk-card>
  </div>
  <div>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</vk-card>
  </div>
  <div>
    <vk-card>Lorem Ipsum</vk-card>
  </div>
</vk-grid>
```

***

### Match all

If your grid wraps into multiple rows, only grid columns within the same row are matched. To match grid columns across all rows set the `row: false` option.

```html
<vk-grid v-vk-height-match="{ row: false }">...</vk-grid>
```

```example
<vk-grid class="uk-child-width-1-2@s" v-vk-height-match="{ target: '> div > .uk-card', row: false }">
  <div>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</vk-card>
  </div>
  <div>
    <vk-card>Lorem Ipsum</vk-card>
  </div>
  <div>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</vk-card>
  </div>
  <div>
    <vk-card>Lorem Ipsum</vk-card>
  </div>
</vk-grid>
```

***

## Options

| Name | Type  | Default | Description |
|------|-------|---------|-------------|
| `target` | String  | `> *`   | Elements that should match. |
| `row`    | Boolean | `true`  | By default only items in the same row will be matched. For example, once grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports. |

==Note== You can learn about directives and how to apply options at the [Directives guide](directives).
