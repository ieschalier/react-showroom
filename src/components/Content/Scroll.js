import React, { Component } from 'react'
import Highlight from 'react-highlight'
import InfiniteScroll from 'react-stateless-infinite-scroll'
import faker from 'faker'

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
import InfiniteScroll from 'react-stateless-infinite-scroll'

const Scroll = (props) => {

  const Items = props.phrases.map((phrase) => <div>{phrase}</div>)

  return (
    <InfiniteScroll
      height={400}
      items={Items}
      loadMore={props.actions.loadMore}
      hasMore={props.hasMore}
      loading={props.loading}
      error={props.error}
    />
  )
}
`

class Preview extends React.Component {

  generateData = () => {
    const data = []
    for (var i = 0; i < 50; i++) {
      data.push(faker.hacker.phrase())
    }

    return data
  }

  state = {
    array: this.generateData(),
    hasMore: true,
    loading: false,
    error: false,
  }

  loadMore = () => { this.setState({ array: [...this.state.array, ...this.generateData()] }) }

  resetData = () => { this.setState({ array: this.generateData() }) }

  hasMore = (e) => { this.setState({ hasMore: e.target.checked }) }

  loading = (e) => { this.setState({ loading: e.target.checked }) }

  error = (e) => { this.setState({ error: e.target.checked }) }

  render = () => (
    <div>
      <button onClick={this.resetData} style={{margin: '0 10px 10px 10px'}}>Reset</button>
      <input
        type='checkbox'
        id='hasMore'
        defaultChecked={this.state.hasMore}
        onClick={this.hasMore}
        style={{margin: '0 10px 10px 10px'}}
      />
      <label htmlFor='hasMore'>Has more data</label>
      <input
        type='checkbox'
        id='loading'
        defaultChecked={this.state.loading}
        onClick={this.loading}
        style={{margin: '0 10px 10px 10px'}}
      />
      <label htmlFor='loading'>Loading</label>
      <input
        type='checkbox'
        id='error'
        defaultChecked={this.state.error}
        onClick={this.error}
        style={{margin: '0 10px 10px 10px'}}
      />
      <label htmlFor='error'>Error</label>
      <InfiniteScroll
        height={400}
        items={this.state.array.map((item, index) => <Cell key={index} content={item}/>)}
        loadMore={this.loadMore}
        hasMore={this.state.hasMore}
        loading={this.state.loading}
        error={this.state.error}
      />
    </div>
  )
}

const Cell = ({ content }) => {

  const style = {
    paddingTop: 19,
    boxSizing: 'border-box',
    height: 60,
    fontSize: 20,
    fontWeight: 400,
    paddingLeft: 15,
    color: '#666',
    backgroundColor: '#fbfbfb',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  }

  return (
    <div {...{style}}>{content}</div>
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
