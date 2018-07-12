import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Homepage from './home/home';

const App = () => (
  <div>
    <header>

      <NavbarContainer />
      <Homepage />
    </header>

    <Switch>

    </Switch>

  </div>
);

export default App;
