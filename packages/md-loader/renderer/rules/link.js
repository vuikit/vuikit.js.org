module.exports = (href, title, text) => {
  const isExternal = /https?/

  if (isExternal.test(href)) {
    return `<a href="${href}"${isExternal ? ' target="_blank"' : ''}>${text}</a>`
  }

  return `<router-link to="${href}" class="tm-internal-link">${text}</router-link>`
}
