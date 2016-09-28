import React, { Component } from 'react'
import Highlight from 'react-highlight'
import TextField from 'react-enhanced-form'

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
import TextField from 'react-enhanced-form'

const Form = () => {

  const style = {
    default: {outline: 'none'},
    onFocus: {borderBottom: '1px solid green'},
    onError: {borderBottom: '1px solid red'}
  }

  const lessThan1000 = newValue => newValue < 1000

  return (
    <form>
      <Label>{'Must be less than 1000'}</Label>
      <TextField
        type='number'
        value={1000}
        onChange={(data, error) => console.log('change', data, error)}
        onMount={(data,error) => console.log('mount', data, error)}
        style={style}
        check={lessThan1000}
        required
      />
    </form>
  )
}

export default Form
`

const Preview = () => {

  const stylized = {
    height: 50,
    backgroundColor: '#fafafa',
    borderRadius: 3,
    paddingLeft: 10,
    fontSize: 20
  }

  const style = {
      default: {color: 'black', outline: 'none', width: 300, border: 'none', ...stylized},
      onFocus: {borderBottom: '1px solid green', ...stylized},
      onError: {borderBottom: '1px solid red', ...stylized}
    }

  const lessThan1000 = newValue => newValue < 1000
  const email = newValue => newValue.match(/.*@.*\..*/)

  const handleSubmit = (e) => {
    alert(e)
  }

  const Label = ({ children }) => {

    const style = {
      fontFamily: 'Sans-serif',
      fontWeight: 400,
      paddingLeft: 5,
      color: '#666'
    }

    return <h3 style={style}>{children}</h3>
}

  return (
    <form onSubmit={handleSubmit}>
      <Label>{'Must be less than 1000'}</Label>
      <TextField
        type='number'
        value={1000}
        onChange={(data, error) => console.log('change', data, error)}
        onMount={(data,error) => console.log('mount', data, error)}
        style={style}
        check={lessThan1000}
        required
      />
      <br />
      <Label>{'Must be an email'}</Label>
      <TextField
        type='text'
        value='name@domain.com'
        onChange={(data, error) => console.log('change', data, error)}
        onMount={(data,error) => console.log('mount', data, error)}
        style={style}
        check={email}
        required
      />
    </form>
  )
}

class Input extends Component {

  render = () => (
    <div style={style.container}>
      <h1 style={style.h1}>
        react-enhanced-form
        <a
          href='https://github.com/xeonys/react-enhanced-form'
          style={{...style.link, paddingLeft: 20}}
        >
          Github
        </a>
        <a
          href='https://npmjs.com/react-enhanced-form'
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


export default Input
