module.exports = (header, body) =>
  `<div class="uk-overflow-auto">
    <table class="uk-table uk-table-divider">
      <thead>${header}</thead>
      <tbody>${body}</tbody>
    </table>
  </div>`
