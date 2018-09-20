import { put, takeEvery, delay } from 'redux-saga/effects';

import * as ActionTypes from './../actions';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: ActionTypes.incrementAsync });
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.INCREMENT, incrementAsync);
}
