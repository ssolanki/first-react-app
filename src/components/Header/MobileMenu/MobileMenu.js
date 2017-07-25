import React from 'react'

import Menu from './Menu/Menu'
import ToggleButton from './ToggleButton/ToggleButton'

import styles from './MobileMenu.css'

class MobileMenu extends React.Component {
  constructor () {
    super()
    this.state = {
      isDropdownOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeOnClick = this.closeOnClick.bind(this)
  }
  toggleMenu (e) {
    e.preventDefault()
    this.setState({isDropdownOpen: !this.state.isDropdownOpen})
  }
  closeOnClick (e) {
    this.setState({isDropdownOpen: false})
  }
  render () {
    return (
      <div className={styles.mobileNav + ' dropdown'}>
        <ToggleButton handleClick={this.toggleMenu} isOpen={this.state.isDropdownOpen} />
        <Menu handleClick={this.closeOnClick} isOpen={this.state.isDropdownOpen} />
      </div>
    )
  }
}

export default MobileMenu
