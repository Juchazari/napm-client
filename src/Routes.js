import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
  return (
    <Switch>
      <Route exact path="/dashboard">
        <Projects />
      </Route>
      <Route exact path="/dashboard/insights">
        <Insights />
      </Route>
      <Route exact path="/dashboard/inbox">
        <Inbox />
      </Route>
      <Route exact path="/dashboard/settings">
        <Settings />
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
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
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