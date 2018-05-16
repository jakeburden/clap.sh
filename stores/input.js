var clap = require('clap-stream')

function store (state, emitter) {
  state.text = ''
  state.offset = 0

  var stream = clap()
  stream.on('data', function (data) {
    state.text += data
    state.offset = state.text.length
    emitter.emit('render')
  })

  emitter.on('input', function (value) {
    stream.write(value.substring(state.offset))
  })

  emitter.on('backspace', function (value) {
    state.text = value
    state.offset = value.length
    stream.write(value.substring(state.offset))
  })
}

module.exports = store
