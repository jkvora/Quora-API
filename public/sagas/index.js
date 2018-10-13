import { takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as ActionTypes from "./../actions";
import api from "./../services";

export function* incrementAsync() {
  yield delay(1000);
  // yield put(counter());
}

export function* fetchProfile(action) {
  console.log("In Profile");
  let result = yield api.fetchProfile(action.data);
  yield put({ type: ActionTypes.API_OUTPUT, result });
  console.log(result);
}

export function* fetchStats(action) {
  console.log("In Stats");
  let result = yield api.fetchStats(action.data);
  yield put({ type: ActionTypes.API_OUTPUT, result });
  console.log(result);
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.INCREMENT, incrementAsync);
  yield takeEvery(ActionTypes.FETCH_PROFILE, fetchProfile);
  yield takeEvery(ActionTypes.FETCH_STATS, fetchStats);
}
