import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import SearchForm from './components/SearchForm'

export default(
  <Route path="/" component={App}>
    <Route path="searchform" component={SearchForm}/>
  </Route>
)
