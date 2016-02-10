import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

import App from './app'

var data = [
  {text: 'learn react', done: true},
  {text: 'build an app', done: false}
]

ReactDOM.render(<App initialData={data} />, document.getElementById('container'))
