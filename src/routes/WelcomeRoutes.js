import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import NotFound from '../pages/NotFound';

function WelcomeRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
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

export default WelcomeRoutes;