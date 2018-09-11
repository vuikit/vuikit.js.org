# Navbar

<p class="uk-text-lead">Create a navigation bar that can be used for your main site navigation.</p>

## Usage

The Navbar component consists of a navbar itself and one or more navigations.

```html
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-item href active></vk-navbar-nav-item>
    <vk-navbar-nav-item href></vk-navbar-nav-item>
  </vk-navbar-nav>
</vk-navbar>
```

```example
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
</vk-navbar>
```

***

## Multiple navigations

You can place more than one navigation inside a navbar. That way you can have a left aligned, a centered and a right aligned navigation inside the same navbar.

```html
<vk-navbar>
  <vk-navbar-nav></vk-navbar-nav>
  <vk-navbar-nav slot="center"></vk-navbar-nav>
  <vk-navbar-nav slot="right"></vk-navbar-nav>
</vk-navbar>
```

```example
<vk-navbar>

  <vk-navbar-nav>
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
  
  <vk-navbar-nav slot="right">
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
  
</vk-navbar>
```

***

## Click mode

A parent item inside the navbar can be enabled by either hovering or clicking the toggle. Just add the `mode="click"` prop to the `vk-navbar-nav-dropdown`.

```html
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-dropdown mode="click">...</vk-navbar-nav-dropdown>
  </vk-navbar-nav>
</vk-navbar>
```

```example
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent" mode="click">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
</vk-navbar>
```

***

## Transparent modifier

When using an image or colored background for the hero section of your website, you might want to turn the navbar transparent. Simply set the `transparent` prop and if necessary, add the `.uk-light` or `.uk-dark` class from the [UIkit Inverse component](https://getuikit.com/docs/inverse) to adjust the navbar's color.

```html
<vk-navbar transparent>...</vk-navbar>
```

```example
<div class="uk-position-relative">
  <img src="/images/guide/light.jpg">
  <div class="uk-position-top">
    <vk-navbar transparent>
      <vk-navbar-nav>
        <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
        <vk-navbar-nav-dropdown title="Parent">
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item title="Active" active></vk-nav-item>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item-header title="Header"></vk-nav-item-header>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item-divider></vk-nav-item-divider>
            <vk-nav-item title="Item"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
      </vk-navbar-nav>
    </vk-navbar>
  </div>
</div>
```

***

## Subtitle

To define a subtitle, set the `subtitle` prop to `vk-navbar-nav-item`.

```html
<vk-navbar-nav-item subtitle></vk-navbar-nav-item>
```

```example
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-item title="Active" subtitle="Subtitle" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent" subtitle="Subtitle">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    <vk-navbar-nav-item title="Item" subtitle="Subtitle"></vk-navbar-nav-item>
  </vk-navbar-nav>
</vk-navbar>
```

***

## Content item

You can also add custom content to the navbar, like text, icons, buttons or forms. Use the `vk-navbar-item` component that serves as a container for your content.

```html
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-logo></vk-navbar-logo>
    <vk-navbar-nav>...</vk-navbar-nav>
    <vk-navbar-item>...</vk-navbar-item>
  </vk-navbar-nav>
</vk-navbar>
```

Use the `vk-navbar-logo` to indicate your brand.

```example
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-logo>Logo</vk-navbar-logo>
    <vk-navbar-nav>
      <vk-navbar-nav-item icon="star" title="Features"></vk-navbar-nav-item>
    </vk-navbar-nav>
    <vk-navbar-item>
      <div>Some <a>Link</a></div>
    </vk-navbar-item>
    <vk-navbar-item>
      <form action="javascript:void(0)">
        <input class="uk-input uk-form-width-small uk-margin-small-right" type="text" placeholder="Input">
        <vk-button>Button</vk-button>
      </form>
    </vk-navbar-item>
  </vk-navbar-nav>
</vk-navbar>
```

***

## Centered logo

You can create a split menu with a centered logo. Use the `center-left` soft for one nav and `center-right` slot for the other. This will keep your logo centered and align the menus to the left and right.

```html
<vk-navbar>
  <vk-navbar-nav slot="center-left">...</vk-navbar-nav>
  <vk-navbar-logo slot="center">...</vk-navbar-logo>
  <vk-navbar-nav slot="center-right">...</vk-navbar-nav>
</vk-navbar>
```

```example
<vk-navbar>
  <vk-navbar-nav slot="center-left">
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
  </vk-navbar-nav>
  
  <vk-navbar-logo slot="center">Logo</vk-navbar-logo>
    
  <vk-navbar-nav slot="center-right">
    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
</vk-navbar>
```

***

## Toggle item

Use the `vk-navbar-toggle` to render an icon as a toggle. By default, there is no JavaScript attached to the toggle. As an example, you can add an offcanvas navigation from the [Offcanvas component](offcanvas) or a modal from the [Modal component](modal).

```html
<vk-navbar>
  <vk-navbar-toggle></vk-navbar-toggle>
</vk-navbar>
```

```example
<vk-navbar class="uk-margin">
  <vk-navbar-toggle></vk-navbar-toggle>
</vk-navbar>

<vk-navbar class="uk-margin">
  <vk-navbar-toggle title="Menu"></vk-navbar-toggle>
</vk-navbar>
```

***

## Dropdowns

A navbar can contain a dropdown from the [Dropdown component](dropdown). Simply use the `vk-navbar-nav-dropdown` wrapper so it fits perfectly into the navbar's styling and behaviour. Use `vk-navbar-nav-dropdown-nav` for the nav inside the dropdown.

```html
<vk-navbar-nav>
  <vk-navbar-nav-dropdown title>
    <vk-navbar-nav-dropdown-nav>...</vk-navbar-nav-dropdown-nav>
  </vk-navbar-nav-dropdown>
</vk-navbar-nav>
```

```example
<vk-navbar>

  <vk-navbar-nav>
    <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
    <vk-navbar-nav-dropdown title="Parent">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
  </vk-navbar-nav>
  
  <vk-navbar-nav slot="right">
    <vk-navbar-nav-dropdown title="Parent">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
  </vk-navbar-nav>
  
</vk-navbar>
```

***

### Multiple columns

The `vk-navbar-nav-dropdown` will automatically arrange the dropdown content in up to five columns. Columns will stack, if they no longer fit into the container.

```html
<vk-navbar-nav>
  <vk-navbar-nav-dropdown title>
    <vk-navbar-nav-dropdown-nav>...</vk-navbar-nav-dropdown-nav>
    <vk-navbar-nav-dropdown-nav>...</vk-navbar-nav-dropdown-nav>
  </vk-navbar-nav-dropdown>
</vk-navbar-nav>
```

```example
<vk-navbar>
  <vk-navbar-nav>
    <vk-navbar-nav-dropdown title="Two Columns">
    
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
      
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
      
    </vk-navbar-nav-dropdown>
  </vk-navbar-nav>
</vk-navbar>
```

***

### Boundary alignment

Dropdowns can be aligned to the navbar's boundary by setting the `navbar-aligned` prop. Use the `align` prop to change the alignment to `left`, `center` or `right`. By default, dropdowns are aligned to the left.

```html
<vk-navbar-nav-dropdown title navbar-aligned align="center">...</vk-navbar-nav-dropdown>
```

```example
<vk-navbar>
  <vk-navbar-nav>
  
    <vk-navbar-nav-dropdown title="Item" navbar-aligned align="center">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    
    <vk-navbar-nav-dropdown title="Item" navbar-aligned align="center">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    
    <vk-navbar-nav-dropdown title="Item" navbar-aligned align="center">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
  </vk-navbar-nav>
  
  <vk-navbar-nav slot="right">
    <vk-navbar-nav-dropdown title="Item" navbar-aligned align="center">
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
  </vk-navbar-nav>
  
</vk-navbar>
```

***

### Justify

To justify a dropdown, set `justified` prop. In the following example it is aligned to the navbar boundary.

```html
<vk-navbar-nav-dropdown title navbar-aligned justified>...</vk-navbar-nav-dropdown>
```

```example
<vk-navbar>
  <vk-navbar-nav>
  
    <vk-navbar-nav-dropdown title="Item" navbar-aligned justified>
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    
    <vk-navbar-nav-dropdown title="Item" navbar-aligned justified>
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
      <vk-navbar-nav-dropdown-nav>
        <vk-nav-item title="Active" active></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-header title="Header"></vk-nav-item-header>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item title="Item"></vk-nav-item>
        <vk-nav-item-divider></vk-nav-item-divider>
        <vk-nav-item title="Item"></vk-nav-item>
      </vk-navbar-nav-dropdown-nav>
    </vk-navbar-nav-dropdown>
    
  </vk-navbar-nav>
</vk-navbar>
```

***

## Dropbar

A dropbar extends to the full width of the navbar and displays the dropdown without its default styling. To place dropdowns inside such a dropbar, wrap the navbar with `vk-navbar-dropbar`.

```html
<vk-navbar-dropbar>
  <vk-navbar>
    <vk-navbar-nav>
      <vk-navbar-nav-dropdown title>...</vk-navbar-nav-dropdown>
    </vk-navbar-nav>
  </vk-navbar>
</vk-navbar-dropbar>
```

```example
<vk-navbar-dropbar>
  <vk-navbar>
  
    <vk-navbar-nav>
      <vk-navbar-nav-dropdown title="Item">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
      <vk-navbar-nav-dropdown title="Item">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>
    
    <vk-navbar-nav slot="right">
      <vk-navbar-nav-dropdown title="Item">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>
    
  </vk-navbar>
</vk-navbar-dropbar>
```

***

### Push

By default, the dropbar overlays the site content. Set the `mode="push"` prop to push the content down instead.

```html
<vk-navbar-dropbar mode="push">
  <vk-navbar>
    <vk-navbar-nav>
      <vk-navbar-nav-dropdown title>...</vk-navbar-nav-dropdown>
    </vk-navbar-nav>
  </vk-navbar>
</vk-navbar-dropbar>
```

```example
<vk-navbar-dropbar mode="push">
  <vk-navbar>
    <vk-navbar-nav>
      <vk-navbar-nav-dropdown title="Item">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
      <vk-navbar-nav-dropdown title="Item">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>
    <vk-navbar-nav slot="right">
      <vk-navbar-nav-dropdown title="Item">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Item"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>
  </vk-navbar>
</vk-navbar-dropbar>
```

***

## Props

### vk-navbar

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `transparent` | Boolean | `false` | Displays the navbar background as transparent. |

### vk-navbar-full

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `expanded` | Boolean | `false` | Expands the navbar width to the full size of the window. |

### vk-navbar-dropbar

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | String | `slide` | The navbar animation mode, `slide` or `push`. |
| `duration` | Number | `200` | The animation duration. |

### vk-navbar-nav-item

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon`  | String | -- | The icon to display. |
| `href`  | String | -- | The item anchor link. |
| `target` | String | -- | The item anchor target. |
| `title` | String | -- | The title to display. |
| `subtitle` | String | -- | The subtitle to display. |
| `active` | Boolean | `false` | Displays the item as active. |

### vk-navbar-nav-dropdown

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | -- | The title to display. |
| `subtitle` | String | -- | The subtitle to display. |
| `align` | String | `left` | Determines the dropdown alignment, `left`, `center` or `right`. |
| `navbar-aligned` | Boolean | `false` | Aligns the dropdown to the navbar. Possibly combined with `align`. |
| `justified` | Boolean | `false` | Justifies the dropdown width the boundary. Usually combined with `navbar-aligned`. |
| `mode` | String | `click hover` | Space separated list of dropdown trigger behavior modes, `hover` and `click`. |
| `offset` | Boolean, Number | `false` | The offset of the drop's container. When disabled the class margin offset is applied. |
| `animation`  | String | `fade` | The name of the animation to apply on drop show. |
| `duration`   | Number | `200` | Animation duration in milliseconds. |
| `delay-show` | Number | `0` | Delay time in milliseconds before a drop is displayed in hover mode. |
| `delay-hide` | Number | `800` | Delay time in milliseconds before a drop is hidden in hover mode. |
