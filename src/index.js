import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import rootReducer from './reducers'
import './index.css'
import routes from './routes.js'

const store = createStore(rootReducer, applyMiddleware(reduxPromise))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>, document.getElementById('root')
);
