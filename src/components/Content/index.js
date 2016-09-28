import React, { Component } from 'react'
import Home from './Home'
import Grid from './Grid'
import Input from './Input'
import Scroll from './Scroll'

const style = {
  background: '#fafafa',
  width: 'calc(100vw - 80px)',
  height: 'calc(100vh - 144px)',
  position: 'absolute',
  top: 144,
  left: 80,
  boxSizing: 'border-box',
  padding: '0 40px',
  overflow: 'scroll'
}

class Content extends Component {

  state = {
    route: window.location.hash.slice(1)
  }

  hash = (e) => {
    const route = e.newURL.match(/\/#(.*)/)[1]
    this.setState({ route })
  }

  componentWillMount = () => {
    window.addEventListener('hashchange', this.hash)
  }

  who = () => {
    switch (this.state.route) {
      case 'grid': return <Grid />
      case 'scroll': return <Scroll />
      case 'input': return <Input />
      default:
        return <Home />
    }

  }

  render = () => (
    <section style={style}>
      {this.who()}
    </section>
  )
}

export default Content
