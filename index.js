var css = require('sheetify')
var choo = require('choo')

css('tachyons')

css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    height: 100%;
  }

  input {
    box-sizing: border-box;
    padding: 9.5px 15px;
    border: 0;
    text-align: center;
    border-bottom: 1px solid #d8d8d8;
    font-size: 14px;
    transition: border-bottom-color 100ms ease-in, color 100ms ease-in;
    max-width: 200px;
    border-radius: 0;
  }
  input:focus {
    outline: none;
    border-color: #000;
  }
  @media (min-width: 768px) {
    input {
      min-width: 300px;
      max-width: 620px;
    }
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 40px 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  aside nav {
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  aside nav a {
    font-size: 13px;
    color: #b2b2b2;
    text-decoration: none;
    transition: color 100ms ease-in;
  }
  aside nav a:hover {
    color: #ff0080;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    max-width: 390px;
    text-align: center;
    margin: 14px auto 30px auto;
  }
`

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/input'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
