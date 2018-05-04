import {ACTION_TYPES} from '../constants/action-types';

const { FETCH_LOGGED_IN_USER, FETCH_LOGGED_IN_USER_SUCCESS } = ACTION_TYPES;

export const getLoggedInUser = (token) => {
  return {
    type: FETCH_LOGGED_IN_USER,
    token
  };
};

export const getLoggedInUserSuccess = (user, token) => {
  return {
    type: FETCH_LOGGED_IN_USER_SUCCESS,
    payload: { user, token }
  };
};
