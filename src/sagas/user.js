import {put, takeLatest} from 'redux-saga/effects';
import {ACTION_TYPES} from '../constants/action-types';
import { getLoggedInUser } from '../api/user';
import { getLoggedInUserSuccess } from '../actions/user';
import {push} from 'react-router-redux';
import { ROUTES } from '../constants/routes';

const { FETCH_LOGGED_IN_USER, FETCH_LOGGED_IN_USER_ERROR } = ACTION_TYPES;

export function* fetchUser (action) {
  const { token } = action;
  try {
    const user = yield getLoggedInUser(token);
    yield put(getLoggedInUserSuccess(user, token));
    yield put(push(ROUTES.DASHBOARD));
  } catch (err) {
    // abhi-todo Handle error
    yield put({ type: FETCH_LOGGED_IN_USER_ERROR });
  }
}

export function* userAsync () {
  yield takeLatest(FETCH_LOGGED_IN_USER, fetchUser);
}
