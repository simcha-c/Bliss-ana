import React from 'react';
import ReactDOM from 'react-dom';
// import {signup, login, logout} from "./actions/session_actions";
import {fetchProject, createProject, updateProject, deleteProject} from "./actions/project_actions";
import configureStore from "./store/store";
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
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

  window.createProject = createProject;
  window.updateProject = updateProject;
  window.fetchProject = fetchProject;
  window.deleteProject = deleteProject;
  ReactDOM.render(<Root store={store} />, root);
});
