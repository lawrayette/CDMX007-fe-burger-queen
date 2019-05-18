import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login'
import Menu from './views/Menu'

class RouteApp extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/menu' component={Menu} />
      </BrowserRouter>
    )
  }
}

export default RouteApp
