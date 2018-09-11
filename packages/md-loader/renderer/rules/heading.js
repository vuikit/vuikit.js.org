module.exports = function (text, level) {
  this.custom.options.sections = this.custom.options.sections || []

  const id = sluggify(text)

  if (level === 2 || level === 3) {
    if (level === 2) {
      this.custom.options.sections.push({ id, title: text })
    }

    return `<h${level} id="${id}" class="uk-h${level} tm-heading-fragment">
      <a href="#${id}">${text}</a>
    </h${level}>`
  }

  return `<h${level} class="uk-h${level} tm-heading-fragment">${text}</h${level}>`
}

function sluggify (text) {
  return text.toLowerCase().trim()
    .replace(/(&amp;| & )/g, '-and-')
    .replace(/&(.+?);|\?/g, '')
    .replace(/[\s\W-]+/g, '-')
}
