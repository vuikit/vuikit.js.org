# Label

<p class="uk-text-lead">Indicate important notes and highlight parts of your content.</p>

## Usage

To create a label, use the `vk-label` component.

```html
<vk-label></vk-label>
```

```example
<vk-label>Default</vk-label>
```

***

## Style modifier

Use one of the following `type` prop options for additional styles.

| Class | Description |
|:------|:------------|
| `success` | Indicates success or a positive message. |
| `warning` | Indicates a warning.                     |
| `danger`  | Indicates an error or important message. |

```html
<vk-label type="success"></vk-label>
```

```example
<vk-label>Default</vk-label>

<vk-label type="success">Success</vk-label>

<vk-label type="warning">Warning</vk-label>

<vk-label type="danger">Danger</vk-label>
```
