# Drop

<p class="uk-text-lead">Position any element in relation to another element.</p>

## Usage

Any content, like a button, can toggle the drop component. Simply add the `vk-drop` component following the toggle.

```html
<vk-button></vk-button>
<vk-drop></vk-drop>
```

A dropdown can be enabled by hovering and clicking the toggle. Set the `mode` prop as `click` to force a click only mode. If you want to group the toggle and the dropdown, you can add the `.uk-inline` class from the [UIkit Utility component](https://getuikit.com/docs/utility#inline) to a container element around both.

```html
<div class="uk-inline">
  <vk-button></vk-button>
  <vk-drop mode="click"></vk-drop>
</div>
```

==Note== The Drop component has no default styling. In this example, we've used a card from the [Card component](card) for visualization.

```example
<div class="uk-inline">
  <vk-button>Hover</vk-button>
  <vk-drop>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>

<div class="uk-inline">
  <vk-button>Click</vk-button>
  <vk-drop mode="click">
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>
```

***

## Grid in drop

You can place a grid from the [Grid component](grid) inside a drop. If the grid should stack automatically, whenever the drop no longer fits its container, add the `.uk-drop-grid` class.

```html
<vk-drop class="uk-width-large">
  <vk-grid class="uk-drop-grid uk-child-width-1-2@m">...</vk-grid>
</div>
```

Use one of the classes from the [UIkit Width component](https://getuikit.com/docs/width) to adjust the drop's width.

```example
<vk-button>Hover</vk-button>
<vk-drop class="uk-width-large">
  <vk-card>
    <vk-grid class="uk-drop-grid uk-child-width-1-2@m">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </div>
    </vk-grid>
  </vk-card>
</vk-drop>
```

***

## Position

Add one of the following options to the `position` prop to adjust the drop's alignment.

```html
<vk-drop position="top-left"></div>
```

```example
<div class="uk-inline">
  <vk-button>Top Right</vk-button>
  <vk-drop position="top-right">
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>

<div class="uk-inline">
  <vk-button>Bottom Justify</vk-button>
  <vk-drop position="bottom-justify">
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>

<div class="uk-inline">
  <vk-button>Right Center</vk-button>
  <vk-drop position="right-center">
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>
```

| Position         | Description                                                                   |
|:-----------------|:------------------------------------------------------------------------------|
| `bottom-left`    | Aligns the drop to the bottom left.                                           |
| `bottom-center`  | Aligns the drop to the bottom center.                                         |
| `bottom-right`   | Aligns the drop to the bottom right.                                          |
| `bottom-justify` | Aligns the drop to the bottom and justifies its width to the related element. |
| `top-left`       | Aligns the drop to the top left.                                              |
| `top-center`     | Aligns the drop to the top center.                                            |
| `top-right`      | Aligns the drop to the top right.                                             |
| `top-justify`    | Aligns the drop to the top and justifies its width to the related element.    |
| `left-top`       | Aligns the drop to the left top.                                              |
| `left-center`    | Aligns the drop to the left center.                                           |
| `left-bottom`    | Aligns the drop to the left bottom.                                           |
| `right-top`      | Aligns the drop to the right top.                                             |
| `right-center`   | Aligns the drop to the right center.                                          |
| `right-bottom`   | Aligns the drop to the right bottom.                                          |

***

## Boundary

By default, the drop flips automatically when it exceeds the viewport's edge. If you want to flip it according to a container's boundary, use the `boundary` prop, specifying a query selector or Vue ref for the container. That way you can determine any parent element as the drop's boundary.

```html
<div class="my-class">
  <vk-button></vk-button>
  <vk-drop boundary=".my-class"></div>
</div>

<div ref="myBoundary">
  <vk-button></vk-button>
  <vk-drop boundary="myBoundary"></div>
</div>
```

```example
<div ref="boundary" class="uk-panel uk-placeholder uk-width-2-3@s">
  <vk-button class="uk-float-left">Hover</vk-button>
  <vk-drop boundary="boundary">
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>

  <vk-button class="uk-float-right">Hover</vk-button>
  <vk-drop boundary="boundary">
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>
```

***

### Boundary alignment

You can also align the drop to its boundary. To do so, use the `boundary-align` prop.

```html
<div ref="my-boundary">
  <vk-button></vk-button>
  <vk-drop boundary="my-boundary" boundary-align></vk-drop>
</div>
```

```example
<div ref="boundary" class="uk-panel uk-placeholder">
  <vk-button class="uk-float-left">Justify</vk-button>
  <vk-drop position="bottom-justify" boundary="boundary" boundary-align>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>

  <vk-button class="uk-float-right">Center</vk-button>
  <vk-drop position="bottom-center" boundary="boundary" boundary-align>
    <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
  </vk-drop>
</div>
```

***

## Offset

To define a custom offset between the drop container and the toggle, specify the value with the `offset` prop, measured in pixels.

```html
<vk-drop :offset="80"></vk-drop>
```

```example
<vk-button>Hover</vk-button>
<vk-drop :offset="80">
  <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
</vk-drop>
```

***

## Animation

Apply one or more animations to the dropdown by using the `animation` prop with one of the classes (without the prefix) from the [UIkit Animation component](https://getuikit.com/docs/animation). You can also determine the animation's duration by setting the `duration` prop with a value in milliseconds.

```html
<vk-drop animation="slide-top-small" :duration="1000"></vk-drop>
```

```example
<vk-button>Hover</vk-button>
<vk-drop animation="slide-top-small" :duration="1000">
  <vk-card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</vk-card>
</vk-drop>
```

***

## Props

| Name | Value | Default | Description |
|------|-------|---------|-------------|
| `target`     | String, Node Element | -- | CSS selector or a reference to an element to be used as the toggler. By default, the preceding element is used. |
| `boundary`   | String, Node Element | `window` | CSS selector or a reference to the element to maintain the drop's visibility. |
| `position`   | String | `bottom-left` | The position of the drop. |
| `mode`       | String | `click hover` | Space separated list of drop trigger behavior modes: `hover`, `click` |
| `delay-show` | Number | `0` | Delay time in milliseconds before a drop is displayed in hover mode. |
| `delay-hide` | Number | `800` | Delay time in milliseconds before a drop is hidden in hover mode. |
| `boundary-align` | Boolean | `false` | Align the drop to its boundary. |
| `flip`       | Boolean, String | `true` | Automatically flip the drop. Possible values are `false`, `true`, `x` or `y`. |
| `offset`     | Boolean, Number | `false` | The offset of the drop's container. When disabled the class margin offset is applied. |
| `animation`  | String | `fade` | The name of the animation to apply on drop show. |
| `duration`   | Number | `200` | Animation duration in milliseconds. |
