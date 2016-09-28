import React, { Component } from 'react'

const style = {
  a: {
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    display: 'block',
    paddingTop: 30,
  },
  i: {
    fontSize: 25
  }
}

class Link extends Component {

  state = {
    color: '#ddd',
  }

  hash = (e) => {
    const route = e.newURL.match(/\/#(.*)/)[1]
    const color = this.props.to === route ? '#444' : '#ddd'
    this.setState({ color })
  }

  componentWillMount = () => {
    window.addEventListener('hashchange', this.hash)
  }

  componentDidMount = () => {
    const match = this.props.to === window.location.hash.slice(1)
    const color = match ? '#444' : '#ddd'
    this.setState({ color })
  }

  render = () => (
    <a
      href={`#${this.props.to}`}
      style={{...style.a, ...this.state}}
    >
      <i
        className='material-icons'
        style={{...style.i, ...this.state}}
      >
        {this.props.icon}
      </i>
      {this.props.children}
    </a>
  )
}

export default Link
