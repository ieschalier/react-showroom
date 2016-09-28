import React, { Component } from 'react'

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



class Home extends Component {

  render = () => (
    <div style={style.container}>
      <h1 style={style.h1}>Home</h1>
      <p style={style.h2}>Explore open source projects from Xeonys dev team</p>
    </div>
  )
}


export default Home
