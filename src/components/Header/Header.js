import React from 'react'

import { NavLink } from 'react-router-dom'

import MobileMenu from './MobileMenu/MobileMenu'
import '../../base.css'
import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>Github War</h1>
      <nav className={styles.desktopNav}>
        <ul className={styles.list}>
          <li className={styles.listItem}><NavLink exact activeClassName={styles.active} className={styles.link} to='/'>Home</NavLink></li>
          <li className={styles.listItem}><NavLink activeClassName={styles.active} className={styles.link} to='/searched'>Searched Items</NavLink></li>
          <li className={styles.listItem}><a className={styles.link} href='https://github.com/ssolanki/first-react-app' target='_blank'>Source Code</a></li>
        </ul>
      </nav>
      <MobileMenu />
    </div>
  </header>
)

export default Header
