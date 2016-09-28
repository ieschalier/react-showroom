import React, { Component } from 'react'
import Highlight from 'react-highlight'
import Masonry, { masonrefresh } from 'masonreact'
import color from 'randomcolor'
import random from 'lodash/random'

const style = {
  container: {
    paddingBottom: 50
  },
  highlight: {
    background: 'white',
    padding: '10px 30px',
    boxSizing: 'border-box',
    borderRadius: 2,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    width: 900,
    marginLeft: 50,
  },
  preview: {
    background: 'white',
    padding: '30px',
    boxSizing: 'border-box',
    borderRadius: 2,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    width: 900,
    marginLeft: 50,
  },
  h1: {
    fontFamily: 'sans-serif',
    fontSize: 40
  },
  link: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#bbb'
  },
  h2: {
    fontFamily: 'sans-serif',
    paddingLeft: 20,
  },
}


const snippet = `import React from 'react'
import Masonry from 'masonreact'
import color from 'randomcolor'
import random from 'lodash/random'

const App = () => {

  const style = {
    color: 'white',
    fontFamily: 'Sans-serif',
    textShadow: '0 0 2px rgba(0,0,0,0.5)',
    padding: 20
  }

  return (
    <Masonry cols={random()} margin={10} transitionDuration={'0.5s'}>
      <div style={{...style, height: random(), backgroundColor: color()}}>1</div>
      <div style={{...style, height: random(), backgroundColor: color()}}>2</div>
      <div style={{...style, height: random(), backgroundColor: color()}}>3</div>
      <div style={{...style, height: random(), backgroundColor: color()}}>4</div>
      <div style={{...style, height: random(), backgroundColor: color()}}>5</div>
      <div style={{...style, height: random(), backgroundColor: color()}}>6</div>
    </Masonry>
  )

}

export default App
`

class Preview extends Component {
  style = {
    color: 'white',
    fontFamily: 'Sans-serif',
    textShadow: '0 0 2px rgba(0,0,0,0.5)',
    padding: 20
  }

  state = {
    cols: random(1,3)
  }

  handleClick = () => {
    this.forceUpdate()
    masonrefresh()
  }

  render = () => (
    <div>
      <button
        onClick={this.handleClick}
        style={{margin: '0 10px 10px 10px'}}
      >
        Refresh
      </button>
      <Masonry cols={random(2, 3)} margin={10} transitionDuration={'0.5s'}>
        <div style={{...this.style, height: random(2, 4) * 100, backgroundColor: color()}}>1</div>
        <div style={{...this.style, height: random(2, 4) * 100, backgroundColor: color()}}>2</div>
        <div style={{...this.style, height: random(2, 4) * 100, backgroundColor: color()}}>3</div>
        <div style={{...this.style, height: random(2, 4) * 100, backgroundColor: color()}}>4</div>
        <div style={{...this.style, height: random(2, 4) * 100, backgroundColor: color()}}>5</div>
        <div style={{...this.style, height: random(2, 4) * 100, backgroundColor: color()}}>6</div>
      </Masonry>
    </div>
  )
}

class Grid extends Component {

  render = () => (
    <div style={style.container}>
      <h1 style={style.h1}>
        masonreact
        <a
          href='https://github.com/xeonys/masonreact'
          style={{...style.link, paddingLeft: 20}}
        >
          Github
        </a>
        <a
          href='https://npmjs.com/masonreact'
          style={style.link}
        >
          npmJS
        </a>
      </h1>
      <h2 style={style.h2}>Snippet</h2>
      <div style={style.highlight}>
        <Highlight className='javascript'>
          {snippet}
        </Highlight>
      </div>
      <br />
      <h2 style={style.h2}>Preview</h2>
      <div style={style.preview}>
        <Preview />
      </div>
    </div>
  )
}


export default Grid
