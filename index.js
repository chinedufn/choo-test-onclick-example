var html = require('choo/html')

module.exports = renderDiv

function renderDiv (emit) {
  return html`
  <div>
    foo bar
    <div
      onclick=${function () {
        emit('click', 'I was clicked!')
      }}
    >
      hello world
    </div>
  </div>
  `
}
