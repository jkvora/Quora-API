import { takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as ActionTypes from './../actions';

export function* incrementAsync() {
  yield delay(1000);
 // yield put(counter());
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.INCREMENT, incrementAsync);
}
