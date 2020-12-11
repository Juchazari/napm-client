import React from 'react';
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import Inbox from './pages/Inbox';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

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
      <Route path="/forgot">
        <ForgotPassword />
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