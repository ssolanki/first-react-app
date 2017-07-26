import React from 'react'
import styles from './AsyncRoute.css'

class AsyncRoute extends React.Component {
  constructor () {
    super()
    this.state = {
      loaded: false
    }
  }
  componentDidMount () {
    this.props.loading.then(module => {
      this.component = module.default
      this.setState({loaded: true})
    })
  }
  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <h2 className={styles.loader}>Loading...</h2>
    }
  }
}
export default AsyncRoute
