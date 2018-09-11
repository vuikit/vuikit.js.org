const marked = require('marked')
const frontMatter = require('./frontMatter')

const defaultWrap = child => `<div>${child}</div>`

module.exports = function (input, {
  wrap = defaultWrap,
  prettier: usePrettier = true
} = {}) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be string')
  }

  const { body } = frontMatter(input)
  const renderer = new marked.Renderer({ langPrefix: 'lang-' })

  // init components, some rules may render an entire component
  // and reference to it. It would be collected here.
  renderer.custom = {
    data: {},
    options: {
      scrollToTop: true
    },
    components: {}
  }

  // set md rules
  renderer.hr = require('./rules/hr')
  renderer.table = require('./rules/table')
  renderer.heading = require('./rules/heading')
  renderer.code = require('./rules/code')
  renderer.link = require('./rules/link')

  let content = marked(body, { renderer })

  // workaround for custom simple rules
  // ==Label==
  content = content.replace(/==(.*)==/g, (match, text) => `<vk-label>${text}</vk-label>`)

  // if (content.indexOf('{%isodate%}') !== -1) {
  //   content = content.replace(/{%isodate%}/g, (new Date(Date.now() + 864e5 * 7)).toISOString().replace(/\.(\d+)Z/, '+00:00'))
  // }

  return {
    template: wrap(content),
    data: renderer.custom.data,
    options: renderer.custom.options,
    components: renderer.custom.components
  }
}
