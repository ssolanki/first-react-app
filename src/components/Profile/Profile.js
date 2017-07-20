import React from 'react'

import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import styles from './Profile.css'

const Profile = ({user}) => (
  <div className={styles.userProfile}>
    <div className={styles.basicInfo + ' clearfix'}>
      <a className={styles.githubLink} href={user.url} target="_blank">
        <img src={user.avatar_url} alt="image"/>
        <h3> {user.name} </h3>
        <p> {user.location} </p>
      </a>
    </div>
    <div className={styles.otherInfo + ' clearfix'}>
      <Col componentClass={ControlLabel} sm={4}>
         <p className={styles.count}> {user.followers} </p>
         <p className={styles.text}> Followers </p>
      </Col>
      <Col componentClass={ControlLabel} sm={4}>
        <p className={styles.count}> {user.repos} </p>
        <p className={styles.text}> Repository </p>
      </Col>
      <Col componentClass={ControlLabel} sm={4}>
        <p className={styles.count}> {user.following} </p>
        <p className={styles.text}> Following </p>
      </Col>
    </div>
  </div>
)

export default Profile
