import React, { Component } from 'react'
// import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'
import TableList from './TableList'
import JoinSession from './JoinSession'
import CreateSession from './CreateSession'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
   
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/class" component={TableList} />
          <Route path="/joinSession" component={JoinSession} />
          <Route path="/createSession" component={CreateSession} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main
