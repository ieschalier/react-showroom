import React, { Component } from 'react'
import Highlight from 'react-highlight'

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


const snippet = ``

const Preview = () => {
  const style = {
    color: 'white',
    fontFamily: 'Sans-serif',
    textShadow: '0 0 2px rgba(0,0,0,0.5)',
    padding: 20
  }

  return (
    <div></div>
  )
}

class Scroll extends Component {

  render = () => (
    <div style={style.container}>
      <h1 style={style.h1}>
        react-stateless-infinite-scroll
        <a
          href='https://github.com/xeonys/react-stateless-infinite-scroll'
          style={{...style.link, paddingLeft: 20}}
        >
          Github
        </a>
        <a
          href='https://npmjs.com/react-stateless-infinite-scroll'
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


export default Scroll
