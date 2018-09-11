const prettier = require('prettier')
const compiler = require('vue-template-compiler')
const stripWith = require('vue-template-es2015-compiler')

module.exports = function ({ template, data, components, options }) {
  if (typeof template !== 'string') {
    throw new TypeError('Expected template to be string')
  }

  const result = []
  const compiled = compiler.compile(template)

  if (compiled.errors && compiled.errors.length > 0) {
    throw new Error(
      `\n  Error compiling:\n${template}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    )
  }

  const renderFn = stripWith(toFunction(compiled.render, 'render'))

  let staticRenderFns = ''
  if (compiled.staticRenderFns.length > 0) {
    staticRenderFns = stripWith(`[${compiled.staticRenderFns
      .map(fn => toFunction(fn))
      .join(',')}]`)
    staticRenderFns = `,\n  staticRenderFns:${staticRenderFns}`
  }

  result.push(
    `render: ${renderFn}${staticRenderFns}`
  )

  if (data) {
    result.push(
      `data: function () { return ${JSON.stringify(data)} }`
    )
  }

  if (options) {
    Object.keys(options).forEach(key => {
      result.push(
        `${key}: ${JSON.stringify(options[key])}`
      )
    })
  }

  if (components) {
    const compiled = []

    Object.keys(components).forEach(name => {
      compiled.push(
        `'${name}': ${module.exports(components[name])}`
      )
    })

    result.push(`components: { ${compiled.join('\n,')} }`)
  }

  // result.push(`layout: 'guide'`)

  // being returned a raw object pretter parse will fail,
  // a simple solution is to wrap the code with parenthesis
  // and remove after
  return prettify(`({ ${result.join('\n,')} })`)
    .trim()
    .replace(/^;\(|\)$/g, '')
}

function prettify (code) {
  return prettier.format(code, {
    parser: 'babylon',
    semi: false,
    singleQuote: true
  })
}

function toFunction (code, name = '') {
  return `function ${name}(){${code}}`
}
