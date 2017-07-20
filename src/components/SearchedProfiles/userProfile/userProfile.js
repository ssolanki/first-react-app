import React from 'react'

import styles from './userProfile.css'

const UserProfile = ({user}) => (
  <div>
    <a className={styles.githubLink} href={user.url} target='_blank'>
      <img className={styles.avatar} src={user.avatar_url} alt='image' />
      <span className={styles.name}> {user.name} </span>
      <span className={styles.info}> Repos: {user.repos} </span>
    </a>
  </div>
)

export default UserProfile
