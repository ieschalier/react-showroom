import React, { Component } from 'react'
import Left from './components/Left'
import Header from './components/Header'
import Content from './components/Content'

const nrmlizr = {
  margin: 0,
  padding: 0,
  overflow: 'hidden'
}

class App extends Component {
  render() {
    return (
      <div style={nrmlizr}>
        <Header />
        <Left />
        <Content />
      </div>
    )
  }
}

export default App
