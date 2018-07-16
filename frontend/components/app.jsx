import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, RootPathRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/login_form_container';
import LoginPage from './home/home';
import TeamShow from './team_show';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path='/login' component={LoginPage} />
      <RootPathRoute exact path="/" />
      <ProtectedRoute path='/logged-in' component={TeamShow} />
    </Switch>

  </div>
);

export default App;
