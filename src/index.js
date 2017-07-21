import React from 'react'
import ReactDom from 'react-dom'
import {install} from 'offline-plugin/runtime'

import App from './components/App/App'

const container = document.getElementById('app')

ReactDom.render(<App />, container)

if (process.env.NODE_ENV === 'production') {
  install()
}
