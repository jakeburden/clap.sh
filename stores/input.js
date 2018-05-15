var clap = require('clap-stream')

function store (state, emitter) {
  state.text = ''
  state.offset = 0

  emitter.on('input', function (value) {
    var stream = clap()
    stream.on('data', function (data) {
      state.text += data
      state.offset = state.text.length
      emitter.emit('render')
    })

    stream.end(value.substring(state.offset))
  })

  emitter.on('backspace', function (value) {
    state.offset = value.length
    state.text = value
    emitter.emit('render')
  })
}

module.exports = store
