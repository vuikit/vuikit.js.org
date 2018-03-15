# Table

<p class="uk-text-lead">Create dynamic nice looking tables.</p>

## Usage

To render a dynamic table use `vk-table` combined with one or more `vk-table-column` columns. The column defines the row `cell` key and the optional head `title`.

```html
<vk-table data>
  <vk-table-column title cell></vk-table-column>
  <vk-table-column title cell></vk-table-column>
</table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
---

<vk-table :data="data">
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

***

## Modifiers

### Striped modifier

Add zebra-striping to the table by setting the `striped` prop.

```html
<vk-table striped>...</vk-table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
---

<vk-table :data="data" striped>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

***

### Hoverable modifier

Set the `hoverable` prop to display a hover state on the table rows.

```html
<vk-table hoverable>...</vk-table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
---

<vk-table :data="data" hoverable>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

***

### Narrowed modifier

Set the `narrowed` prop to make the table cells more compact.

```html
<vk-table narrowed>...</vk-table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
---

<vk-table :data="data" narrowed>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

***

### Justified modifier

To remove the outer padding of the first and last column so that they are flush with the table, set the `justified` prop.

```html
<vk-table justified>...</vk-table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { name: 'Joan B. Jones', city: 'New York', biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
]
---

<vk-table :data="data" justified>
  <vk-table-column class="uk-width-small" title="Name" cell="name"></vk-table-column>
  <vk-table-column title="Biography" cell="biography"></vk-table-column>
  <vk-table-column cell="city">
    <vk-button slot-scope="{ cell }">BUTTON</vk-button>
  </vk-table-column>
</vk-table>
```

***

### Divided modifier

The `divided` prop adds a divider between table rows and is enabled by default. You can explicitly disable it passing a falsy value.

```html
<vk-table :divided="false">...</vk-table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
---

<vk-table :data="data" :divided="false">
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

***

## Sortable

To allow sorting the table data set the `sortedBy` prop, to indicate the current order status, and render the sortable columns with the `vk-table-column-sort` column instead. The `sortedBy` value should be an object composed of cell keys being ordered with it direction, `asc` or `desc`. E.g. `{ name: 'asc', city: 'desc' }`.

```html
<vk-table data sortedBy.sync="{ cell: dir }">
  <vk-table-column-sort title cell>...</vk-table-column-sort>
  <vk-table-column-sort title cell>...</vk-table-column-sort>
</table>
```

The component doesn't sort the data, it only provides a hint through the `sortedBy` prop about when and how to sort it. The actual sorting should be abstracted in the data provider, example the component wrapper or the API server.

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
sortedBy: { name: 'asc' }
---

<vk-table :data="data" :sorted-by.sync="sortedBy">
  <vk-table-column-sort title="Name" cell="name"></vk-table-column-sort>
  <vk-table-column-sort title="City" cell="city"></vk-table-column-sort>
  <vk-table-column-sort title="State" cell="state"></vk-table-column-sort>
</vk-table>
```

==Note== Hold the `shift` key down when sorting to enable sorting by multiple values.

***

## Selectable

Set the `row-selectable` or `rows-selectable` props to enable the table single or multiple row selection.
Sync the selected rows with the `selected-rows` prop.

```html
<vk-table row-selectable :selected-rows="[]">
  <vk-table-column title cell></vk-table-column>
  <vk-table-column title cell></vk-table-column>
</table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
singleSelection: []
multipleSelection: []
---

<vk-table :data="data" :selected-rows.sync="singleSelection" row-selectable>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>

<vk-table :data="data" :selected-rows.sync="multipleSelection" rows-selectable>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

==Note== Remember to set the prop with the `sync` modifier.

***

### Column Select

Use the `vk-table-column-select` to render a column of checkboxes indicating the current row select state. It can be combined with the row selection feature.

```html
<vk-table>
  <vk-table-column-select></vk-table-column-select>
  <vk-table-column></vk-table-column>
</table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
selection: []
---

<vk-table :data="data" :selected-rows.sync="selection">
  <vk-table-column-select></vk-table-column-select>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

***

## Responsive

If your table happens to be wider than its container element or would eventually get too big on a specific viewport width, just wrap it inside a `<div>` element and add the `.uk-overflow-auto` class from the [UIkit Utility](https://getuikit.com/docs/utility#overflow) component. This creates a container that provides a horizontal scrollbar whenever the elements inside it are wider than the container itself.

```html
<div class="uk-overflow-auto">
  <vk-table>...</vk-table>
</div>
```

```example
---
data: [{}, {}, {}]
---

<div class="uk-overflow-auto">
  <vk-table :data="data">
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
    <vk-table-column title="Table Heading">
      <span>Table Heading</span>
    </vk-table-column>
  </vk-table>
</div>
```

***

### Stack on small viewports

If you want table columns to stack on small screens, set the `responsive` prop.

```html
<vk-table responsive>...</vk-table>
```

```example
---
data: [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]
---

<vk-table :data="data" responsive>
  <vk-table-column title="Name" cell="name"></vk-table-column>
  <vk-table-column title="City" cell="city"></vk-table-column>
  <vk-table-column title="State" cell="state"></vk-table-column>
</vk-table>
```

==Note== Resize the browser window to see the columns stack.

***

## Slots

You can customize the cell rendering with the column `default` and `empty` slots.

| Slot | Description |
|------|-------------|
| `Default` | Use it to alter the cell display or to set a static content. |
| `Empty` | Use it to render default information or to inform about missing data. |

Both slots have access to a scope of, `{ cell, row, selected, allSelected }` 


```html
<vk-table data>
  <vk-table-column>Static Content</vk-table-column>
  <vk-table-column cell>
    <div slot-scope="scope">...</div>
    <div slot="empty" slot-scope="scope">...</div>
  </vk-table-column>
</table>
```

```example
---
data: [
  { name: 'John A. Smith', age: 24, state: 'CA' },
  { name: 'Joan B. Jones', state: 'NY' },
  { name: 'Bob C. Uncle', state: 'CA' }
]
selected: []
---

<vk-table :data="data" :selected-rows.sync="selected" rows-selectable>
  <vk-table-column-select headless></vk-table-column-select>
  <vk-table-column title="Name" cell="name" expanded>
    <div slot-scope="{ cell, selected, allSelected }">
      <span v-if="allSelected">
        All rows selected!
      </span>
      <span v-else-if="selected">
        {{ cell }} is selected
      </span>
      <span v-else>
        {{ cell }}
      </span>
    </div>
  </vk-table-column>
  <vk-table-column title="Age" cell="age">
    <div slot-scope="{ cell }">
      {{ cell }} years old
    </div>
    <div slot="empty">
      Age unknown
    </div>
  </vk-table-column>
</vk-table>
```

***

## Utilities

To optimize the display of table cells and their specific content, you can use one of the following utils or methods.

| Util | Description |
|--------------|-------------|
| Text shrink | To reduce the column width to fit its content set the `shrinked` prop. |
| Text expand | To expand the column width to fill the remaining space and apply a min-width, use the `expanded` prop. |
| Text truncate | When applying a fixed width to a column, you might want to enable the `truncated` prop in order to truncate the text. |
| Text nowrap | Set the `unwrapped` prop to keep the cell text from wrapping, for example when using the `shrinked` prop. |
| Cell link | To link an entire cell, set the `linked` prop to a column and insert an `<a>` element using one of the slots. Add the `.uk-link-reset` class from the [UIkit Link component](https://getuikit.com/docs/link) to reset the default link styling. |
| Cell width | Set one of the classes from the [UIkit Width component](https://getuikit.com/docs/width), without the prefix, to the `width` prop on a column in order to modify the column width. |
| Cell alignment | To vertically center cell content, set the `cell-middle` prop to the table or a column for a more specific selection. To apply the alignment to an entire row, use the table `rowClass` prop function and return `.uk-table-middle` class. |
| Preserve width | Since images are responsive by default in Vuikit, using an image inside a `shrinked` column would reduce the image width to 0. To prevent this behavior, add the `.uk-preserve-width` class from the [UIkit Base component](https://getuikit.com/docs/base) to the `<img>` element. |

```html
<!-- Text shrink -->
<vk-table-column shrinked></vk-table-column>

<!-- Text expand -->
<vk-table-column expanded></vk-table-column>

<!-- Text truncate -->
<vk-table-column truncated></vk-table-column>

<!-- Text nowrap -->
<vk-table-column unwrapped></vk-table-column>

<!-- Cell link -->
<vk-table-column linked>
  <a class="uk-link-reset" href=""></a>
</vk-table-column>

<!-- Cell width -->
<vk-table-column width="small"></vk-table-column>

<!-- Cell alignment -->
<vk-table cell-middle></vk-table>
<vk-table>
  <vk-table-column cell-middle></vk-table-column>
</vk-table>

<!-- Preserve width -->
<vk-table-column linked>
  <img class="uk-preserve-width">
</vk-table-column>
```

```example
---
data: [{}, {}, {}, {}]
selected: []
---

<div class="uk-overflow-auto">
  <vk-table :data="data" :selected-rows.sync="selected" hoverable cell-middle>
    <vk-table-column-select headless></vk-table-column-select>
    <vk-table-column title="Preserve" shrinked>
      <img class="uk-preserve-width uk-border-circle" src="/images/avatar.jpg" width="40" alt="" />
    </vk-table-column>
    <vk-table-column title="Linked" linked>
      <a class="uk-link-reset" href="#">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </a>
    </vk-table-column>
    <vk-table-column title="Truncate" truncated>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </vk-table-column>
    <vk-table-column title="Shrink + Nowrap" shrinked unwrapped>
      Lorem ipsum dolor
    </vk-table-column>
  </vk-table>
</div>
```

***

## Props

### vk-table

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `data` | Array | -- | The table rows data, an array composed of `Objects`. Each object is a row, and each object key value is a cell. |
| `rowKey` | String | `id` | The row key that represent it id. Used mostly for sorting and selecting rows, if a row is missing the id value, the row index will be used instead. |
| `rowClass` | Function | -- | A function for adding custom row classes. It provides the current row being rendered and expects a string back. |
| **Sort related** |  |  |  |
| `sortedBy` | Object | -- | The object representing the order state. Check the [sortable](#sortable) section for more information. |
| **Select related** |  |  |  |
| `selectedRows` | Array | `[]` | The array representing the currently selected rows. Check the [selectable](#selectable) section for more information. |
| `rowSelectable` | Boolean | `false` | Enables single row selection on row click. |
| `rowsSelectable` | Boolean | `false` | Enables multiple row selection on row click. |
| **Style Modifiers** |  |  |  |
| `divided` | Boolean | `true` | Adds a divider between table rows. Check [modifiers section](#divided-modifier) for more details. |
| `narrowed` | Boolean | `false` | Make the table cells more compact. Check [modifiers section](#narrowed-modifier) for more details. |
| `striped` | Boolean | `false` | Adds zebra-striping to the table. Check [modifiers section](#striped-modifier) for more details. |
| `hoverable` | Boolean | `false` | Displays a hover state on the table rows. Check [modifiers section](#hoverable-modifier) for more details. |
| `justified` | Boolean | `false` | Removes the outer padding of the first and last column. Check [modifiers section](#justified-modifier) for more details. |
| **Utils** |  |  |  |
| `responsive` | Boolean | `false` | Forces the table columns to stack on small screens. Check [responsive section](#stack-on-small-viewports) for more details. |
| `cellMiddle` | Boolean | `false` | Vertically centers all columns content. Check the [utilities section](#utilities) for more details. |

### vk-table-column-*

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | -- | The column head title. |
| `cell` | String | -- | The cell key representing the data inside the row object. |
| `cellClass` | String | -- | A custom class to apply to all column cells.  |
| **Utils** |  |  |  |
| `shrinked` | Boolean | `false` | Reduces the cell width to fit its content. |
| `expanded` | Boolean | `false` | Expands the column width to fill the remaining space. |
| `truncated` | Boolean | `false` | Truncates the text when it doesn't fit it container. |
| `unwrapped` | Boolean | `false` | Keeps the cell text from wrapping. |
| `width` | String | -- | Set one of the classes from the [UIkit Width component](https://getuikit.com/docs/width) in order to modify the column width. |
| `linked` | Boolean | `false` | Sets the entire cell a link effect. Check [utilities section](#justified-modifier) for more details. |
| `cellMiddle` | Boolean | `false` | Vertically centers the column cell content. |
| **Select Specific** |  |  |  |
| `headless` | Boolean | `false` | Disables the column head display. |
