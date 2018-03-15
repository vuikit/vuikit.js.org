# Pagination

<p class="uk-text-lead">Easily create a nice looking pagination to navigate through pages.</p>

## Usage

The `vk-pagination` component consists of button-like styled links, that are aligned side by side in a horizontal list.

```html
<vk-pagination>
  <vk-pagination-pages></vk-pagination-pages>
</vk-pagination>
```

```example
---
page: 7
---

<vk-pagination :page.sync="page" :perPage="10" :total="200">
  <vk-pagination-page-prev></vk-pagination-page-prev>
  <vk-pagination-pages></vk-pagination-pages>
  <vk-pagination-page-next></vk-pagination-page-next>
</vk-pagination>
```

==Note== In the demo we are setting the `page` prop with a [sync modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to give the pagination the possibility to control the display.

***

## Alignment

Use the `align` prop to change the pagination alignment to `left` or `right`.

```html
<vk-pagination align="left">...</vk-pagination>
<vk-pagination align="right">...</vk-pagination>
```

```example
---
page: 7
---

<vk-pagination align="left" :page.sync="page" :perPage="10" :total="100">
  <vk-pagination-page-prev></vk-pagination-page-prev>
  <vk-pagination-pages></vk-pagination-pages>
  <vk-pagination-page-next></vk-pagination-page-next>
</vk-pagination>

<vk-pagination align="right" :page.sync="page" :perPage="10" :total="100">
  <vk-pagination-page-prev></vk-pagination-page-prev>
  <vk-pagination-pages></vk-pagination-pages>
  <vk-pagination-page-next></vk-pagination-page-next>
</vk-pagination>
```

***

## Page control

Set one of the `vk-pagination-page-*` components inside `vk-pagination` to display the page control buttons.

| Component | Description |
|-----------|-------------|
| `vk-pagination-page-first` | Displays a go to first page button. |
| `vk-pagination-page-last`  | Displays a go to last page button. |
| `vk-pagination-page-prev`  | Displays a go to previous page button. |
| `vk-pagination-page-next`  | Displays a go to next page button. |

```html
<vk-pagination>
  <vk-pagination-page-first></vk-pagination-page-first>
  <vk-pagination-page-prev label="Previous" expanded></vk-pagination-page-prev>
  <vk-pagination-page-next label="Next" expanded></vk-pagination-page-next>
  <vk-pagination-page-last></vk-pagination-page-last>
</vk-pagination>
```

```example
---
page: 1
---

<vk-pagination :page.sync="page" :per-page="50" :total="200">
  <vk-pagination-page-first></vk-pagination-page-first>
  <vk-pagination-page-prev label="Previous" expanded></vk-pagination-page-prev>
  <vk-pagination-pages></vk-pagination-pages>
  <vk-pagination-page-next label="Next" expanded></vk-pagination-page-next>
  <vk-pagination-page-last></vk-pagination-page-last>
</vk-pagination>
```

***

## Props

### vk-pagination

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `page` | Number | `1` | The currently displayed page. |
| `perPage` | Number | -- | The amount of items displayed per page. |
| `total` | Number | -- | The total amount of items across all pages. |
| `range` | Number | `3` | The range of pages to show before hiding the rest when the total of pages exceeds the layout. |
| `align` | String | `left` | The pagination alignment, `left`, `center` or `right`. |

### vk-pagination-page-*

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | -- | The button optional label. |
| `disabled` | Boolean | false | Disables the page. |
| `expanded` | Boolean | false | Expands the button taking all the left space. |
