# Styles

<p class="uk-text-lead">Styles are Themes.</p>

Vuikit provides it own styles so you can start right away, but those are totally optional. UIkit has a very well documented theme system on which Vuikit relies and you can use any theme out of a box.

***

## Custom Themes

If you want to build your custom theme head over [UIkit documentation](https://getuikit.com/docs/less#create-a-uikit-theme) to learn how. Once you have your own theme ready, just include those styles instead.

### Vuikit Specific Styles

However, components that are exclusive of Vuikit might have their own styles. If it happens that you are using them, your custom theme should integrate those styles in the build process. One way of doing it is by importing them in the less main file, same way as you would do with UIkit core less files.

Currently the specific styles are related to the following components:

- Table Column Sort
- Table Column Select
