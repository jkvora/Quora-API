import { takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as ActionTypes from "./../actions";
import api from "./../services";

export function* incrementAsync() {
  yield delay(1000);
  // yield put(counter());
}

export function* fetchProfile() {
  console.log("In Profile");
  let result = yield getProfile();
  console.log(result);
  // yield put(counter());
}

function getProfile() {
  return new Promise(async function(resolve, reject) {
    try {
      let result = await api.fetchProfile("Jalak-Vora");
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

export function* fetchStats() {
  yield delay(1000);
  // yield put(counter());
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.INCREMENT, incrementAsync);
  yield takeEvery(ActionTypes.FETCH_PROFILE, fetchProfile);
  yield takeEvery(ActionTypes.FETCH_STATS, fetchStats);
}
