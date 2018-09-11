# Breadcrumb

<p class="uk-text-lead">Create breadcrumbs to show users their location within a website.</p>

## Usage

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider. Use the `vk-breadcrumb` component with `vk-breadcrumb-item` as items within the list. An active state is automatically applied to the last item.

Items without a `href` prop or specifically `disabled`, will render the item without a link.

```html
<vk-breadcrumb>
  <vk-breadcrumb-item href></vk-breadcrumb-item>
  <vk-breadcrumb-item href></vk-breadcrumb-item>
  <vk-breadcrumb-item href></vk-breadcrumb-item>
</vk-breadcrumb>
```

```example
<vk-breadcrumb>
  <vk-breadcrumb-item href="#">Item</vk-breadcrumb-item>
  <vk-breadcrumb-item href="#">Item</vk-breadcrumb-item>
  <vk-breadcrumb-item disabled>Disabled</vk-breadcrumb-item>
  <vk-breadcrumb-item>Active</vk-breadcrumb-item>
</vk-breadcrumb>
```

## Props

### vk-breadcrumb-item

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `href`     | String  | --      | Determines the item anchor href property. |
| `target`   | String  | --      | Determines the item anchor target property. |
| `disabled` | Boolean | `false` | Determines if the item is disabled. |
