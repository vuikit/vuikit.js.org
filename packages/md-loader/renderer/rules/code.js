const hljs = require('highlight.js')
const frontMatter = require('../frontMatter')

let count = 0

module.exports = function (input, lang) {
  switch (lang) {
    case 'example': {
      count++

      const name = `md-code-example-${count}`
      this.custom.components[name] = exampleComponent(input, count)

      return `<${name}></${name}>`
    }
    default:
      return `<div class="uk-margin-medium">
        <pre><code class="lang-${lang} hljs">${renderHighlight(input, lang)}</code></pre>
      </div>`
  }
}

function exampleComponent (input, id) {
  const { body, attributes } = frontMatter(input)
  const markup = renderHighlight(input, 'html')

  const template = `
  <div class="uk-position-relative uk-margin-medium">

    <vk-tabs class="uk-margin">
      <vk-tabs-item title="Preview">
        ${body}
      </vk-tabs-item>
      <vk-tabs-item title="Markup">
        <pre><code id="${id}" class="lang-html hljs">${markup}</code></pre>
      </vk-tabs-item>
    </vk-tabs>
  </div>`

  // TODO copy to clipboard && edit on codepen
  // <div class="uk-position-top-right uk-margin-small-top">
  //   <ul class="uk-iconnav">
  //     <li>
  //       <a class="js-copy" v-vk-tooltip="'Copy to Clipboard'" rel="#${id}">
  //         <vk-icon icon="clipboard" />
  //       </a>
  //     </li>
  //     <li>
  //       <a class="js-codepen" v-vk-tooltip="'Edit on Codepen'" rel="#${id}">
  //         <vk-icon icon="flask" />
  //       </a>
  //     </li>
  //   </ul>
  // </div>

  return { template, data: attributes }
}

function renderHighlight (input, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return `Code lang '${lang}' not recognised`
  }

  try {
    const { value } = hljs.highlight(lang, input, true)
    return replaceDelimiters(value)
  } catch (err) {
    console.log(err)
  }
}

function replaceDelimiters (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
}
