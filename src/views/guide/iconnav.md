# Iconnav

<p class="uk-text-lead">Create a navigation consisting of icons.</p>

## Usage

Wrap list of `vk-iconnav-item` components with `vk-iconnav`. Each item can be linked and set as active to form a navigation.

```html
<vk-iconnav>
  <vk-iconnav-item href icon></vk-iconnav-item>
</vk-iconnav>
```

```example
<vk-iconnav>
  <vk-iconnav-item href="#" icon="plus"></vk-iconnav-item>
  <vk-iconnav-item href="#" icon="file-edit"></vk-iconnav-item>
  <vk-iconnav-item href="#" icon="copy"></vk-iconnav-item>
  <vk-iconnav-item href="#" icon="trash"></vk-iconnav-item>
</vk-iconnav>
```

***

## Vertical alignment

By default the items are aligned horizontally. To apply a vertical alignment, use the `VkIconnavVertical` component.

```html
<vk-iconnav-vertical>...</vk-iconnav-vertical>
```

```example
<vk-iconnav-vertical>
  <vk-iconnav-item href="#" icon="plus"></vk-iconnav-item>
  <vk-iconnav-item href="#" icon="file-edit"></vk-iconnav-item>
  <vk-iconnav-item href="#" icon="copy"></vk-iconnav-item>
  <vk-iconnav-item href="#" icon="trash"></vk-iconnav-item>
</vk-iconnav-vertical>
```

***

## Props

### vk-iconnav-item

| Name | Type | Default | Description |
|------|---:---|---------|-------------|
| `icon`   | String | -- | The name of the icon to render. The icon must be registered with an `icon` prefix, eg. `icon-home`. |
| `href`   | String | -- | The item anchor href property. |
| `target` | String | -- | The item anchor target property. |
| `active` | Boolean | `false` | Determines if the item is active. |
| `icon`   | Boolean | `false` | Determines if the item is active. |
