import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/student_signup" component={Pages.StudentSignup} />
      <Route path="/student_login" component={Pages.StudentLogin} />
      <Route exact path="/" component={Pages.Home} />
    </Switch>
  );
};

export default Routes;