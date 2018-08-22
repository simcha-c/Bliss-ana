import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
  <Route path={path} exact={exact} render={(props) => {
    return (!loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    ))
  }
  }
  />
)}


// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
};

const RootPath = ({ exact, path, loggedIn, team }) => {
  return <Route path={path} exact={exact} render={(props) => {
    return (
     loggedIn ? (
      <Redirect to={`/teams/${team.id}`} />
    ) : (
      <Redirect to="/login" />
    )
  )}}/>
};

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  const randomTeam = state.entities.teams[Object.keys(state.entities.teams)[0]]

  // ##################################
  // if the user has no team, the user will be redirected to /dashboard. Right now
  // there is no path to /dashboard, so it's just giving time for the state to update.
  // Then redirecting to the automatically generated team.

  if (!randomTeam) {
    return (
      <Redirect to="/dashboard" />
    )
  }
  return {
    loggedIn: Boolean(state.session.id),
    team: randomTeam
  };
}

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

// connect Root to the redux state
export const RootPathRoute = withRouter(connect(mapStateToProps)(RootPath));
