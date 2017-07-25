import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Menu.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const Menu = ({children, isOpen, handleClick}) => {
  let menuClass = cx({
    'dropdown-menu': true,
    dropdownMenu: true,
    open: isOpen
  })
  return (
    <ul className={menuClass}>
      <li className={styles.listItem} onClick={handleClick}><NavLink exact activeClassName={styles.active} className={styles.link} to='/'>Home</NavLink></li>
      <li className={styles.listItem} onClick={handleClick}><NavLink activeClassName={styles.active} className={styles.link} to='/searched'>Searched Items</NavLink></li>
      <li className={styles.listItem} onClick={handleClick}><a className={styles.link} href='https://github.com/ssolanki/first-react-app' target='_blank'>Source Code</a></li>
    </ul>
  )
}

export default Menu
