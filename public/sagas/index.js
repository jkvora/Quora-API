import { takeEvery, put } from "redux-saga/effects";
import * as ActionTypes from "./../actions";
import api from "./../services";

export function* fetchProfile(action) {
  console.log("In Profile");
  yield put({ type: ActionTypes.API_OUTPUT_LOADING });
  let result = yield api.fetchProfile(action.data);
  yield put({ type: ActionTypes.API_OUTPUT, result });
  yield put({ type: ActionTypes.API_OUTPUT_LOADED });
  console.log(result);
}

export function* fetchStats(action) {
  console.log("In Stats");
  let result = yield api.fetchStats(action.data);
  yield put({ type: ActionTypes.API_OUTPUT, result });
  console.log(result);
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.FETCH_PROFILE, fetchProfile);
  yield takeEvery(ActionTypes.FETCH_STATS, fetchStats);
}
