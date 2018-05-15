var html = require('choo/html')

var TITLE = 'clap.sh'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3 tc">
          <input type='text' onkeyup=${keyup} value=${state.text} placeholder='Enter 👏 Your 👏 Text'/>

          <aside>
            <nav>
              <a href='https://github.com/jekrb/clap.sh' target="_blank">here is the source code!</a>
            </nav>
          </aside>
        </section>
      </main>
    </body>
  `

  function keyup (e) {
    var value = e.target.value
    if (e.keyCode === 8) return emit('backspace', value)
    emit('input', value)
  }
}
