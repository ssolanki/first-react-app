import React from 'react'

import {BrowserRouter} from 'react-router-dom'

import 'normalize.css'

import Routes from '../Routes/Routes'
import Header from '../Header/Header'
import styles from './App.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Routes />
      </div>
    </div>
  </BrowserRouter>
)

export default App
