const prettier = require('prettier')
const compile = require('./vue-compiler')

module.exports = function ({
  template,
  data = {},
  options = {},
  components = {}
} = {}, {
  prettier: usePrettier = true
} = {}) {
  let component = compile({
    template, data, options, components
  })

  if (usePrettier) {
    // workaround for prettier to avoid it
    // throwing error of bad formated code
    component = `export default ${component}`

    component = prettier.format(component, {
      parser: 'babylon',
      semi: false,
      singleQuote: true
    })

    component = component.replace(/^export default /, '')
  }

  return component
}
