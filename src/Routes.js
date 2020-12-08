import React from 'react';
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dashboard';
import Projects from './containers/Projects';
import Insights from './containers/Insights';
import Inbox from './containers/Inbox';
import Settings from './containers/Settings';
import NotFound from './containers/NotFound';

export function DashboardRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Projects />
      </Route>
      <Route path={`${path}/insights`}>
        <Insights />
      </Route>
      <Route path={`${path}/inbox`}>
        <Inbox />
      </Route>
      <Route path={`${path}/settings`}>
        <Settings />
      </Route>
      <Route>
        <Redirect to={`${path}`} />
      </Route>
    </Switch>
  );
}

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}