# Grid

<p class="uk-text-lead">Create a fully responsive, fluid and nestable grid layout.</p>

The Grid system allows you to arrange block elements in columns and works closely together with the [UIkit Width component](https://getuikit.com/docs/width) to determine how much space of the container each item will take up. It can also be combined with the [UIkit Flex component](https://getuikit.com/docs/flex) to align and order grid items.

***

## Usage

To init the grid container, use the `vk-grid` component. Add child `<div>` elements to create the cells. By default, all grid cells are stacked. To place them side by side, add one of the classes from the [UIkit Width component](https://getuikit.com/docs/width). Using `uk-child-width-expand` will automatically apply equal width to items, regardless of how many there are.

```html
<vk-grid>
  <div></div>
  <div></div>
</vk-grid>
```

==Note== Often cards from the [Card component](card) are used inside a grid. In the following examples as well for a better visualization.

```example
<vk-grid class="uk-child-width-expand@s uk-text-center">
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
</vk-grid>
```

***

## Gutter modifiers

The Grid component comes with a default gutter, that is decreased automatically from a certain breakpoint, usually on a smaller desktop viewport width. To apply a different gutter, use the `gutter` prop with one of the following options.

| Class | Description |
|-------|-------------|
| `small` | Use this option to apply a small gutter. |
| `medium` | Use this option to apply a medium gutter like the default one, but without a breakpoint. |
| `large` | Use this option to apply a large gutter with breakpoints. |
| `collapse` | Use this option to remove the grid gutter entirely. |

```html
<vk-grid gutter="small">...</vk-grid>
```

```example
<vk-grid gutter="small" class="uk-child-width-expand@s uk-text-center">
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
</vk-grid>
```

```example
<vk-grid gutter="medium" class="uk-child-width-expand@s uk-text-center">
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
</vk-grid>
```

```example
<vk-grid gutter="large" class="uk-child-width-expand@s uk-text-center">
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
</vk-grid>
```

```example
<vk-grid gutter="collapse" class="uk-child-width-expand@s uk-text-center">
  <div>
    <div class="uk-background-muted uk-padding">Item</div>
  </div>
  <div>
    <div class="uk-background-primary uk-padding uk-light">Item</div>
  </div>
  <div>
    <div class="uk-background-secondary uk-padding uk-light">Item</div>
  </div>
</vk-grid>
```

***

## Nested grid

You can easily extend your grid layout with nested grids.

```html
<vk-grid>
  <div>
    <vk-grid>
      <div></div>
      <div></div>
    </vk-grid>
  </div>
  <div>
    <vk-grid>
      <div></div>
      <div></div>
    </vk-grid>
  </div>
</vk-grid>
```

```example
<vk-grid class="uk-child-width-1-2 uk-text-center">
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-grid class="uk-child-width-1-2 uk-text-center">
      <div>
        <vk-card type="primary">Item</vk-card>
      </div>
      <div>
        <vk-card type="primary">Item</vk-card>
      </div>
    </vk-grid>
  </div>
</vk-grid>
```

***

## Divided modifier

Add the `divided` prop to separate grid cells with lines. This option can be combined with the `gutter` prop. As soon as the grid stacks, the divider lines will become horizontal.

```html
<vk-grid divided>...</vk-grid>
```

```example
<vk-grid divided class="uk-child-width-expand@s">
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
</vk-grid>
```

***

## Match height

To match the height of the direct child of each cell, set the `matched` prop. This is needed to match the height of cards from the [Card component](card).

```html
<vk-grid matched>...</vk-grid>
```

```example
<vk-grid matched class="uk-child-width-expand@s uk-text-center">
  <div>
    <vk-card>Item</vk-card>
   </div>
  <div>
    <vk-card>Item<br>...</vk-card>
  </div>
  <div>
    <vk-card>Item<br>...<br>...</vk-card>
  </div>
</vk-grid>
```

***

### Match only one cell

You can also match the height of the direct child of just one cell. To do so, add the `.uk-grid-item-match` class to the grid item whose child you want to match.

```html
<vk-grid>
  <div class="uk-grid-item-match"></div>
  <div></div>
</vk-grid>
```

```example
<vk-grid class="uk-child-width-expand@s">
  <div class="uk-grid-item-match">
    <vk-card>
      <h3>Heading</h3>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </vk-card>
  </div>
  <div>
    <h3>Heading</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
</vk-grid>
```

***

### Advanced

For a more specific selection of the elements whose heights should be matched, use the [HeightMatch directive](height-match).

```html
<vk-grid v-vk-height-match="{ target: '> div > .uk-card' }">
  <div>
    <vk-card></vk-card>
  </div>
  <div>
    <vk-card></vk-card>
  </div>
</vk-grid>
```

```example
<vk-grid 
  class="uk-child-width-expand@s uk-text-center" 
  v-vk-height-match="{ target: '> div > .uk-card' }"
>
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item<br>...</vk-card>
  </div>
  <div>
    <vk-card>Item<br>...<br>...</vk-card>
  </div>
</vk-grid>
```

***

## Grid and width

The grid is mostly used in combination with the [UIkit Width component](https://getuikit.com/docs/width). This allows for great flexibility when determining the column widths.

```html
<vk-grid>
  <div class="uk-width-auto@m"></div>
  <div class="uk-width-1-3@m"></div>
  <div class="uk-width-expand@m"></div>
</vk-grid>
```

```example
<vk-grid class="uk-text-center">
  <div class="uk-width-auto@m">
    <vk-card>Auto</vk-card>
  </div>
  <div class="uk-width-1-3@m">
    <vk-card>1-3</vk-card>
  </div>
  <div class="uk-width-expand@m">
    <vk-card>Expand</vk-card>
  </div>
</vk-grid>
```

***

### Child width

If the grid columns are evenly split, you can add one of the `.uk-child-width-*` classes to the grid container, instead of adding a class to each of the items.

```html
<vk-grid class="uk-child-width-1-2@s uk-child-width-1-3@m">...</vk-grid>
```

```example
<vk-grid class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center">
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
  <div>
    <vk-card>Item</vk-card>
  </div>
</vk-grid>
```

For more detailed information, take a look at the [UIkit Width component](https://getuikit.com/docs/width).

***

## Grid and flex

You can easily combine the grid with the [UIkit Flex component](https://getuikit.com/docs/flex). That way you can modify the items' alignment, ordering, direction and wrapping. This allows you, for example, to flip the cells' display order for wider viewports. All this works together with the gutter and divider modifiers.

```html
<vk-grid class="uk-flex-center">
  <div></div>
  <div class="uk-flex-first"></div>
</vk-grid>
```

```example
<vk-grid gutter="small" class="uk-child-width-1-4@s uk-flex-center uk-text-center">
  <div>
    <vk-card>Item 1</vk-card>
  </div>
  <div class="uk-flex-last">
    <vk-card type="secondary">Item 2</vk-card>
  </div>
  <div>
    <vk-card>Item 3</vk-card>
  </div>
  <div>
    <vk-card>Item 4</vk-card>
  </div>
  <div class="uk-flex-first">
    <vk-card type="primary">Item 5</vk-card>
  </div>
  <div>
    <vk-card>Item 6</vk-card>
  </div>
</vk-grid>
```

***

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `gutter`  | String | -- | The default gutter to apply. It's decreased automatically from a certain breakpoint. |
| `divided` | String | `false` | Adds a separation line between items. |
| `matched` | String | `false` | Match the height of the direct child of each cell. |
| `margin`  | String | `uk-grid-margin` | This class is added to items that break into the next row, typically to create margin to the previous row. |
| `first-column` | String | `uk-first-column` | This class is added to the first element in each row. |
