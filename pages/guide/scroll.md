# Scroll

<p class="uk-text-lead">Scroll smoothly when jumping to different sections on a page.</p>

## Usage

Apply the `v-vk-scroll` directive to any anchor element that contains a URL fragment to add the smooth scrolling behavior.

```html
<a href="#my-id" v-vk-scroll></a>
```

```example
<vk-button-link 
  type="primary" 
  href="#target"
  v-vk-scroll
>
  Scroll down
</vk-button-link>
```

***

## Multiple anchors

If you apply `v-vk-scroll` to an element other that anchor it will target all the child anchors and apply the scrolling individually. You can change the match criteria with the `target` option.

```html
<p v-vk-scroll="'SELECTOR'">
  <a href></a>
  <a href></a>
</p>
```

```example
<p v-vk-scroll="'span > a'">
  <span>
    <vk-button-link type="primary" href="#target">
      I match!
    </vk-button-link>
  </span>
  <vk-button-link href="#target">
    I don't :(
  </vk-button-link>
</p>
```

==Note== `target` is the _primary_ option and its key may be omitted if it's the only option in the directive value.

***

## Callbacks

To receive a callback when scrolling has completed, you can listen to the `afterScroll` event on the element that triggered the scrolling. As well as listen to `beforeSroll` to do some action or prevent scrolling by returning `false`.

```html
<a href="#my-id" v-vk-scroll @beforeSroll @afterScroll></a>
```

```example
---
text: 'Down with callback'
---

<vk-button-link
  type="primary"
  href="#target"
  v-vk-scroll
  @afterScroll="text = 'I did it!'"
>
  {{ text }}
</vk-button-link>
```

***

## Options

| Name | Type  | Default | Description |
|------|-------|---------|-------------|
| `target`   | String  | `a`     | Selector that will be used to match child anchors. |
| `duration` | Number  | `1000`  | Animation duration in milliseconds. |
| `offset`   | Number  | `0`     | Pixel offset added to scroll top.   |
| `force`    | Boolean | `false` | Forces the scrolling even if link default action has been prevented. |

==Note== You can learn about directives and how to apply options at the [Directives guide](directives).

***

### Events

The following events will be triggered on elements with this directive attached:

| Name           | Description                                                             |
|:---------------|:------------------------------------------------------------------------|
| `beforeScroll` | Fires before scroll begins. Can prevent scrolling by returning `false`. |
| `afterScroll`  | Fires after scrolling is finished.                                      |

<div style="height: 2000px;"></div>

<vk-button-link type="primary" id="target" href="#top" v-vk-scroll>Scroll up</vk-button-link>
