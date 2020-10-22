import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import TeachersDesk from './pages/Classroom/TeachersDesk'
import StudentsDesk from './pages/Classroom/StudentsDesk'
import Homework from './pages/Classroom/Homework'


function App() {
  return (
    <div className="App">
      <NavMain/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/teacher" component={TeachersDesk} />
        <Route exact path="/student" component={StudentsDesk} />
        <Route exact path="/homework" component={Homework} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      
      </Switch>
   
    </div>
  );
}

export default App;
