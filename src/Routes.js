import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/student_signup" component={Pages.StudentSignup} />
      <Route path="/artist_signup" component={Pages.ArtistSignup} />
      <Route path="/student_login" component={Pages.StudentLogin} />
      <Route path="/artist_login" component={Pages.ArtistLogin} />
      <Route exact path="/" component={Pages.Home} />
    </Switch>
  );
};

export default Routes;