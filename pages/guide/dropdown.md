# Dropdown

<p class="uk-text-lead">Defines different styles for a toggleable dropdown.</p>

## Usage

Any content, like a button, can toggle a dropdown. Ad the `vk-dropdown` component to a block element following the toggle.

```html
<vk-button></vk-button>
<vk-dropdown></vk-dropdown>
```

Basically, a dropdown is a Drop component providing it own styling. The following sections shows the Dropdown specific features, for the rest make sure to read about the [Drop component](drop).

***

## Nav in dropdown

A dropdown can contain a nav from the [Nav component](nav). Simply use the `vk-nav-dropdown` component.

```html
<vk-button></vk-button>
<vk-dropdown>
  <vk-nav-dropdown>...</vk-nav-dropdown>
</vk-dropdown>
```

```example
<vk-button>Hover</vk-button>
<vk-dropdown>
  <vk-nav-dropdown>
    <vk-nav-item title="Active" active></vk-nav-item>
    <vk-nav-item title="Item"></vk-nav-item>
    <vk-nav-item-header title="Header"></vk-nav-item-header>
    <vk-nav-item title="Item"></vk-nav-item>
    <vk-nav-item title="Item"></vk-nav-item>
    <vk-nav-item-divider></vk-nav-item-divider>
    <vk-nav-item title="Item"></vk-nav-item>
  </vk-nav-dropdown>
</vk-dropdown>
```
