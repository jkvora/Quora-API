import { combineReducers } from "redux";
import * as ActionTypes from "./../actions";

function validURL(state = {}, action) {
  switch (action.type) {
    case ActionTypes.VALID_URL: {
      state = action.bValid;
      break;
    }
  }

  return state;
}

function apiOutput(state = {}, action) {
  switch (action.type) {
    case ActionTypes.API_OUTPUT: {
      state = Object.assign({}, state, { json: action.result });
      break;
    }
    case ActionTypes.API_OUTPUT_LOADING: {
      state = Object.assign({}, state, { loading: true }, state);
      break;
    }
    case ActionTypes.API_OUTPUT_LOADED: {
      state = Object.assign({}, state, { loading: false }, state);
      break;
    }
  }

  return state;
}

function counter(counter = {}, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT: {
      counter += 1;
      break;
    }
    case ActionTypes.DECREMENT: {
      counter -= 1;
    }
  }
  return counter;
}

const rootReducer = combineReducers({
  validURL,
  counter,
  apiOutput
});

export default rootReducer;
