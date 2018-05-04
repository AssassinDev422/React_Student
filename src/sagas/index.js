import { setScholarshipsAsync } from './scholarships';
import { authAsync } from './auth';
import { userAsync } from './user';
import { setCommonDataAsync } from './common-data';
import { all } from 'redux-saga/effects';

export default function* rootSaga () {
  yield all([
    setScholarshipsAsync(),
    setCommonDataAsync(),
    authAsync(),
    userAsync()
  ]);
}
