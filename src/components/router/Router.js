import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/about";
import Dashboard from "../landing/Dashboard";
import Signup from "../register/Signup";
import Login from "../register/Login";
import Contact from "../contact/contact";
// import Users from '../Users.js';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}
export default Router;
