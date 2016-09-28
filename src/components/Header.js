import React, { Component } from 'react'

const nrmlizr = {
  margin: 0,
  padding: 0,
}

const style = {
  header: {
    background: '#3F51B5',
    width: '100%',
    height: 144,
    margin: 0,
  },
  h2: {
    ...nrmlizr,
    fontFamily: 'sans-serif',
    fontWeight: 100,
    color: 'white',
    padding: '55px 40px',
  },
  a: {
    textDecoration: 'none',
    color: 'white',
  }
}

class App extends Component {
  render = () => (
    <header style={style.header}>
      <h2 style={style.h2}>
        <b>
          <a
            href='http://www.xeonys.com/'
            style={style.a}
          >
            xeonys
          </a>
        </b>
        /react-showroom</h2>
    </header>
  )
}

export default App
