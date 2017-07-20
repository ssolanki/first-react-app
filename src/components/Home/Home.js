import React from 'react'

import SearchBox from '../SearchBox/SearchBox'
import Profile from '../Profile/Profile'
import styles from './Home.css'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      textbox1: {
        id: 1,
        text: ''
      },
      textbox2: {
        id: 2,
        text: ''
      },
      userPairs: JSON.parse(window.localStorage.getItem('searchedPairs')) || []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (text, id) {
    const state = this.state
    switch (id) {
      case 1:
        this.setState({
          textbox1: {...state.textbox1, id, text, error: false}
        })
        break
      default:
        this.setState({
          textbox2: {...state.textbox2, id, text, error: false}
        })
    }
  }

  handleSubmit (id) {
    let text
    const state = this.state
    switch (id) {
      case 1:
        text = state.textbox1.text
        break
      default:
        text = state.textbox2.text
    }
    const url = `https://api.github.com/users/${text}`

    window.fetch(url)
      .then(response => response.json())
      .then(data => {
        let error = false
        let userFetched = true

        const githubUser = {
          id: data.id,
          avatar_url: data.avatar_url,
          url: data.html_url,
          name: data.name,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location
        }

        if (!data.id) {
          error = true
          userFetched = false
        }

        switch (id) {
          case 1:
            this.setState({
              ...state,
              textbox1: {...state.textbox1, error, userFetched},
              textbox2: {...state.textbox2, userFetched: false},
              user1: githubUser
            })
            break
          default:
            this.setState({
              ...state,
              textbox1: {...state.textbox1, userFetched: false},
              textbox2: {...state.textbox2, error, userFetched},
              user2: githubUser
            })
        }

        if (!data.id) return false

        const newState = this.state
        if (newState.user1 && newState.user2) {
          let newPair = {user1: newState.user1, user2: newState.user2}
          this.setState({
            ...newState,
            textbox1: {
              id: 1,
              text: '',
              userFetched: true,
              error: false
            },
            textbox2: {
              id: 2,
              text: '',
              userFetched: true,
              error: false
            },
            user1: null,
            user2: null,
            userPairs: [newPair].concat(newState.userPairs.filter(userPair => newPair.user1 && newPair.user2 && (userPair.user1.id !== newPair.user1.id || userPair.user2.id !== newPair.user2.id)))
          })
          window.localStorage.setItem('searchedPairs', JSON.stringify(this.state.userPairs))
        }
      })
  }

  render () {
    const { textbox1, textbox2, user1, user2, userPairs } = this.state
    let profile1, profile2
    if (textbox1.userFetched && textbox2.userFetched) {
      profile1 = userPairs[0].user1
      profile2 = userPairs[0].user2
    } else {
      profile1 = user1
      profile2 = user2
    }

    return (
      <div className={styles.container}>
        <h3 className={styles.totalCount}> Total Pairs: {userPairs.length} </h3>
        <div className={styles.searchBox + ' clearfix'}>
          <Col componentClass={ControlLabel} sm={6}>
            <SearchBox id={textbox1.id} text={textbox1.text} onSubmit={this.handleSubmit} onChange={this.handleChange} />
          </Col>
          <Col componentClass={ControlLabel} sm={6}>
            <SearchBox id={textbox2.id} text={textbox2.text} onSubmit={this.handleSubmit} onChange={this.handleChange} />
          </Col>
        </div>
        <div className={styles.profiles + ' clearfix'}>
          {profile1 != null &&
            <Col componentClass={ControlLabel} smOffset={1} sm={5}>
              <Profile user={profile1} />
            </Col>
          }
          {profile1 != null && profile2 != null &&
            <Col componentClass={ControlLabel} sm={1}>
              <p className={styles.seperatorText}> vs </p>
            </Col>
          }
          {profile2 != null &&
            <Col componentClass={ControlLabel} sm={5}>
              <Profile user={profile2} />
            </Col>
          }
        </div>
      </div>
    )
  }
}

export default Home
