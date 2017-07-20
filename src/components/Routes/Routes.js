import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import SearchedProfiles from '../SearchedProfiles/SearchedProfiles'
import NotFound from '../NotFound/NotFound'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/searched' component={props => {
        const searchedPairs = JSON.parse(window.localStorage.getItem('searchedPairs')) || []
        return <SearchedProfiles userPairs={searchedPairs} />
      }} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default Routes
