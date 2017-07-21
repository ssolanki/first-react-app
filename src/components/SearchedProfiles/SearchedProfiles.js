import React from 'react'

import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import UserProfile from './userProfile/userProfile'
import styles from './SearchedProfiles.css'

const SearchedProfiles = ({userPairs}) => {
  let i = 0

  return (
    <div className={styles.container}>
      <h3> Your Searched Items ({userPairs.length}) : </h3>
      {userPairs.length
        ? userPairs.map(userPair => (
          <div key={i++} className={styles.userInfo + ' clearfix'}>
            <Col mdOffset={1} md={4} sm={5}>
              <UserProfile id={userPair.user1.id} user={userPair.user1} />
            </Col>
            <Col componentClass={ControlLabel} md={1} sm={2}>
              <p className={styles.seperatorText}> vs </p>
            </Col>
            <Col mdOffset={1} md={4} sm={5}>
              <UserProfile id={userPair.user2.id} user={userPair.user2} />
            </Col>
          </div>
        ))
        : <p>Users not searched!</p>
      }
    </div>
  )
}

export default SearchedProfiles
