import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AsyncRoute from '../AsyncRoute'

import './App.css'

// code splitting
const AsyncHome = props => (
  <AsyncRoute props={props} loadingPromise={import('./Home')} />
)

const AsyncHello = props => (
  <AsyncRoute props={props} loadingPromise={import('./Hello')} />
)

const AsyncWorld = props => (
  <AsyncRoute props={props} loadingPromise={import('./World')} />
)

const AsyncNotFound = props => (
  <AsyncRoute props={props} loadingPromise={import('./NotFound')} />
)

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/hello" component={AsyncHello} />
        <Route path="/world" component={AsyncWorld} />
        <Route component={AsyncNotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
