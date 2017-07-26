import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AsyncRoute from '../AsyncRoute/AsyncRoute'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={props => <AsyncRoute loading={System.import('../Home/Home')} />} />
      <Route path='/searched' component={props => {
        const searchedPairs = JSON.parse(window.localStorage.getItem('searchedPairs')) || []
        return <AsyncRoute loading={System.import('../SearchedProfiles/SearchedProfiles')} props={Object.assign({}, props, {userPairs: searchedPairs})} />
      }} />
      <Route component={props => <AsyncRoute loading={System.import('../NotFound/NotFound')} />} />
    </Switch>
  </div>
)

export default Routes
