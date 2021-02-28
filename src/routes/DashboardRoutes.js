import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashHome from '../pages/DashHome';
import Project from '../pages/Project';
import NotFound from '../pages/NotFound';

function DashboardRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <DashHome />
      </Route>
      <Route path="/projects/:id">
        <Project />
      </Route>
      <Route path="/login">
        <Redirect to="/" />
      </Route>
      <Route path="/signup">
        <Redirect to="/" />
      </Route>
      <Route path="/forgot">
        <Redirect to="/" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default DashboardRoutes;