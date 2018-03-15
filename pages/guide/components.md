# Components

<p class="uk-text-lead">Most of the time is all you will need.</p>

If you followed the [integration guide](integration), components will be globally registered with the `vk` prefix, eg. `vk-button`, and we recommend to follow that convention even when registering them manually. That way they will not conflict with other components or native elements plus will become easily recognizable.

```html
<vk-button props>...</vk-button>
```

***

## Extending a Component

Extending a component sometimes is easy and possible with the inbuilt Vue `extend` component option. But when the requirements are so different from the component spec, it may make more sense to start the component over. If you find your self in that position here are few things that you should know.

- Abstract as much as possible. Vuikit does so by keeping a collection of utils and directives that you can as well use.
- Functional components doesn't support local directives, they must be globally registered or declared in the parent stateful component.
- Use functional components as much as possible but get to know the rendering differences from a stateful one.
- Use `vue-data-merge` util in your functional components, almost always.
- Separate the components logic from the rendering logic.

Vuikit separates the components logic from the rendering by keeping an independent collection of UI Elements for each component which unique purpose is to render a layout. Think of these as UI elements with API (props) that you can rely on to build your components. Those are prefixed with `element` and registered globally as well, eg. `vk-element-icon`.

Lets say you are looking for a way to use your very own icon library. Instead of wrapping or altering the `vk-icon` component, a better way would be to create your custom `my-icon` component which would render the final icon with `vk-element-icon`.

==Note== Avoid relying on globally registered components and always import them. In this case the elements are also available in the Vuikit exports, eg. `import { ElementIcon } from 'vuikit'`.
