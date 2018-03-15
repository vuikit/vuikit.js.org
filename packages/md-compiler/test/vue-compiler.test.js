const compile = require('../lib/vue-compiler')

function snapshot (title, def) {
  test(title, () => {
    expect(compile(def)).toMatchSnapshot()
  })
}

snapshot('basic', {
  template: '<div>content</div>'
})

snapshot('data', {
  data: {
    foo: 'bar'
  },
  template: '<div>content</div>'
})

snapshot('components', {
  components: {
    foo: {
      template: '<div>component foo</div>'
    },
    bar: {
      data: {
        foo: 'bar'
      },
      template: '<div>component bar</div>'
    }
  },
  template: '<div>content</div>'
})
