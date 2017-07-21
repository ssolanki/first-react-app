import React from 'react'

import { NavLink } from 'react-router-dom'
import '../../base.css'
import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>Github War</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}><NavLink exact activeClassName={styles.active} className={styles.link} to='/'>Home</NavLink></li>
          <li className={styles.listItem}><NavLink activeClassName={styles.active} className={styles.link} to='/searched'>Searched Items</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
