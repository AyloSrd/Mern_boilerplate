import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'
import TableList from './TableList'
import JoinSession from './JoinSession'
import CreateSession from './CreateSession'
import TeachersDesk from '../pages/Classroom/TeachersDesk'
import StudentsDesk from '../pages/Classroom/StudentsDesk'
import Homework from '../pages/Classroom/Homework'
import ProtectedRoute from './ProtectedRoute'

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
          <ProtectedRoute exact path='/teacher' component={TeachersDesk}/>
          <ProtectedRoute exact path='/student' component={StudentsDesk}/>
          <ProtectedRoute exact path='/homework' component={Homework}/>
          <Redirect from='*' to='/dashboard' />
        </Switch>
      </div>
    )
  }
}

export default Main
