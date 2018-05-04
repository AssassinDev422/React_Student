import { getScholarships, getTop3Scholarships } from '../api/scholarships';
import {ACTION_TYPES} from '../constants/action-types';
import { fetchScholarshipsSuccess, fetchTop3ScholarshipsSuccess } from '../actions/scholarships';
import {put, takeEvery, all} from 'redux-saga/effects';

const { FETCH_SCHOLARSHIPS } = ACTION_TYPES;

export function* getScholarshipsAsync ({ options = {} }) {
  try {
    const [scholarships, top3Scholarships] = yield all([getScholarships(options), getTop3Scholarships()]);
    yield put(fetchScholarshipsSuccess(scholarships.slice(0, 50)));
    yield put(fetchTop3ScholarshipsSuccess(top3Scholarships));
  } catch (err) {
    // abhi-todo Handle error
    // console.log(err);
  }
}

export function* setScholarshipsAsync () {
  yield takeEvery(FETCH_SCHOLARSHIPS, getScholarshipsAsync);
}
