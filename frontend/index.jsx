import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from "./actions/session_actions";
import configureStore from "./store/store";
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    debugger
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        teams: window.teams,
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.teams;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  ReactDOM.render(<Root store={store} />, root);
});
