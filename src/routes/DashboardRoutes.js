import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

function DashboardRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Projects />
      </Route>
      <Route path="/projects/:projectId">
        <Project />
      </Route>
      <Route path="/settings">
        <Settings />
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