const markdown = require('../lib/markdown')

function snapshot (title, text) {
  test(title, () => {
    expect(markdown(text.trim())).toMatchSnapshot()
  })
}

snapshot('hr', `
***
`)

snapshot('heading', `
# Heading
## Heading
### Heading
`)

snapshot('table', `
| Header | Header |
|:-------|:-------|
| cell   | cell   |
`)

snapshot('code', `
\`\`\`js
function () {}
\`\`\`
`)

snapshot('code:example', `
\`\`\`example
---
foo: 'bar'
---
<div>content</div>
\`\`\`
`)
