import React from 'react'

import styles from './ToggleButton.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const ToggleButton = ({handleClick, isOpen}) => {
  let toggleClass = cx({
    navIcon: true,
    open: isOpen
  })
  return (
    <div onClick={handleClick} className={toggleClass}>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export default ToggleButton
