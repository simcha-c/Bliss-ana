import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, RootPathRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Homepage from './home/home';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path='/login' component={Homepage} />
      <RootPathRoute exact path="/" />
      <ProtectedRoute path='/logged-in' component={NavbarContainer} />
    </Switch>

  </div>
);

export default App;
