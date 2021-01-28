import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import NotFound from '../pages/NotFound';

function LandingRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/forgot">
        <Forgot />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default LandingRoutes;