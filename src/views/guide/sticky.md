# Sticky

<p class="uk-text-lead">Make elements remain at the top of the viewport, like a sticky navigation.</p>

## Usage

To keep an element remaining at the top of the viewport when scrolling down the site, wrap the element with the `vk-sticky` component.

```html
<vk-sticky><div>...</div></vk-sticky>
```

```example
<vk-sticky bottom="#offset">
  <vk-card>Stick to the top</vk-card>
</vk-sticky>
```

==Note== Example elements on this page are only sticky until you scroll down to the next heading and disappear afterwards. This was done so as not to clutter your screen with all variations of sticky containers.

***

## Offset

You can position the element below the viewport edge. Set the `offset` prop with the distance in pixels.

```html
<vk-sticky :offset="100"></vk-sticky>
```

```example
<vk-sticky :offset="100" bottom="#top">
  <vk-card>Stick 100px below the top</vk-card>
</vk-sticky>
```

***

## Top

To apply the sticky behavior with a delay, set the `top` prop, which can be defined either by a number representing the offset in pixels, but also viewport height or a CSS selector.

```html
<!-- sticks after 100px of scrolling -->
<vk-sticky :top="100"></vk-sticky>

<vk-sticky :top="100"></vk-sticky>

<!-- sticks after 100vh -->
<vk-sticky top="100vh"></vk-sticky>

<!-- sticks to the top of the container -->
<div id="my-id">
  <vk-sticky top="#my-id"></vk-sticky>
</div>
```

```example
<vk-grid class="uk-child-width-1-2@s">
  <div>
    <vk-sticky :top="200" bottom="#animation">
      <vk-card>Stick to the top but only after 200px scrolling</vk-card>
    </vk-sticky>
  </div>
  <div>
    <div id="container-1" class="uk-background-muted uk-height-medium" style="margin-bottom: 200px;">
      <vk-sticky top="#container-1" bottom="#animation">
        <vk-card>Stick to the top but below the box</vk-card>
      </vk-sticky>
    </div>
  </div>
</vk-grid>
```

***

## Animation

Set an `animation` prop with one of the [UIkit Animations](https://getuikit.com/docs/animation) without the prefix in order to have the sticky element reappear smoothly.

```html
<vk-sticky animation="slide-top"></vk-sticky>
```

```example
<vk-sticky :top="100" animation="slide-top" bottom="#sticky-on-scroll-up">
  <vk-card style="margin-bottom: 200px;">Animation Slide Top</vk-card>
</vk-sticky>
```

***

## Sticky on scroll up

You can make the sticky element show only when scrolling up to save space. Together with an animation, this makes for a very smooth experience.

```html
<vk-sticky show-on-up></vk-sticky>
```

```example
<vk-sticky show-on-up animation="slide-top" bottom="#bottom">
  <vk-card style="margin-bottom: 200px;">Slide in on scroll up</vk-card>
</vk-sticky>
```

***

## Bottom

Bind the sticky behavior to a specific element, so that it disappears after scrolling past that point of the page.

```html
<!-- sticks until the bottom of its parent container -->
<div>
  <vk-sticky bottom></vk-sticky>
</div>

<!-- sticks until the second container -->
<vk-sticky bottom="#my-id"></vk-sticky>
<div id="my-id"></div>
```

```example
<vk-grid class="uk-child-width-1-2@s">
  <div>
    <div class="uk-background-muted uk-height-medium">
      <div class="uk-height-medium uk-background-muted">
        <vk-sticky bottom>
          <vk-card>Stick until the bottom of its parent container</vk-card>
        </vk-sticky>
      </div>
    </div>
  </div>
  <div>
    <div>
      <vk-sticky bottom="#container-2">
        <vk-card>Stick until the next headline</vk-card>
      </vk-sticky>
    </div>
  </div>
</vk-grid>

<h3 id="container-2">Some Headline</h3>
```

***

## Responsive

You also have the possibility of disabling the sticky behavior for different devices by setting the `media` prop with the appropriate viewport width. The element will be sticky from the specified viewport width and upwards, but not below.

```html
<vk-sticky media="640"></vk-sticky>
```

***

## Props

### vk-sticky

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `top` | Number, String | `0` | The top reference when the element should become sticky set in pixels, viewport height or a CSS selector. |
| `bottom` | Boolean, String | `false` | The bottom reference when the element should stop being sticky. Set a CSS selector or as true to stick until it parent container. |
| `offset` | Number | `0` | Positions the element below the viewport edge, value in pixels. |
| `animation` | String | -- | Animation without the prefix used when transitioning states. |
| `showOnUp` | Boolean | `false` | When enabled the sticky element will appear only when scrolling up. |
| `media` | Number, String | -- | Disables the sticky behavior for different devices. The element will be sticky from the specified viewport width and upwards, but not below. |
| `target` | Boolean | `false` | Initially make sure that the Sticky is not over a targeted element via location hash. |
