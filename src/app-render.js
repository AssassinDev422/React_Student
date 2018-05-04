import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { routes } from './routes';
import { ROUTES } from './constants/routes';
import { getUserToken } from './utils/storage';
import { getLoggedInUser } from './api/user';
import { getLoggedInUserSuccess } from './actions/user';
import { ACTION_TYPES } from './constants/action-types';

const { FETCH_LOGGED_IN_USER_ERROR } = ACTION_TYPES;

export function conditionallyRender (store, history) {
  const render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          { routes }
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
    );
  };

  const path = location.pathname;
  if (path === ROUTES.FACEBOOK_LOGIN_REDIRECT) {
    console.log('app-render - facebook-redirect');
    render();
    return;
  }
  const token = getUserToken();
  if (!token) {
    console.log('app-render - no token', localStorage.getItem('token'), token);
    store.dispatch({ type: FETCH_LOGGED_IN_USER_ERROR });
    render();
  } else {
    getLoggedInUser(token)
      .then(user => {
        console.log('app-render - successful');
        store.dispatch(getLoggedInUserSuccess(user, token));
        render();
      })
      .catch(err => {
        console.log('app-render - Error receiving user information in saga', err);
        store.dispatch({ type: FETCH_LOGGED_IN_USER_ERROR });
        render();
      });
  }
}
