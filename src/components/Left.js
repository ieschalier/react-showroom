import React, { Component } from 'react'
import Link from './Link'

const style = {
  left: {
    width: 80,
    height: 'calc(100vh - 144px)',
    boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
    textAlign: 'center',
    position: 'absolute',
    top: 144,
    left: 0,
    zIndex: 1,
  }
}

class Left extends Component {
  render = () => (
    <section>
      <div style={style.left}>
        <Link to='grid' icon='line_style' />
        <Link to='input' icon='keyboard' />
        <Link to='scroll' icon='mouse' />
      </div>
    </section>
  )
}

export default Left
