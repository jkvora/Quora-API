import { combineReducers } from 'redux';
import * as ActionTypes from './../actions';

function validURL(state = {}, action) {
  switch (action) {
    case ActionTypes.VALID_URL: {
      state.validURL = true;
      break;
    }
    case ActionTypes.INVALID_URL: {
      state.validURL = false;
      break;
    }
  }

  return state;
}

function counter(state = {}, action) {
  switch (action) {
    case ActionTypes.INCREMENT: {
      state.counter += 1;
      break;
    }
    case ActionTypes.DECREMENT: {
      state.counter -= 1;
    }
  }
  return state;
}

const rootReducer = combineReducers({
  validURL,
  counter
});

export default rootReducer;
