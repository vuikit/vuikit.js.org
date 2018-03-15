# Directives

<p class="uk-text-lead">Keep directives simple.</p>

If you followed the [integration guide](integration), directives will be globally registered with the `vk` prefix, eg. `v-vk-tooltip`, and we recommend to follow that convention even when registering them manually. That way they will not conflict with other directives plus will become easily recognizable.


```html
<!-- directive options can be set modifiers -->
<a v-vk-directive.modifier></a>

<!-- as `Object` literals -->
<a v-vk-directive="{ OPTIONS }"></a>

<!-- or as direct values if the directive has a primary option -->
<a v-vk-directive="'VALUE'"></a>
```

Sometimes an option can be set as a modifier as well as literal, in which case literals will have preference over modifiers.

==Note== Get familiar with directives with the excellent [Vue Directives](https://vuejs.org/v2/guide/syntax.html#Directives) guide.

## Extending a Directive

There is no easy way to extend a directive, but all Vuikit directives rely on common utils which you can use as well and recreate the logic from your own custom directive.

Directives are meant to alter the DOM directly, are stateless and should be kept that way but often is needed a place where to keep some minimum state. You can do so directly in the element object under a custom namespace, but remember to delete it when unbinding!

If the directive become to complex consider converting it to an abstract component instead. Abstract components are not documented in Vue but are useful in situations where you need to apply logic to a component or group of components without staying on the way. As example take a look at the Vue `transition` component source code.
