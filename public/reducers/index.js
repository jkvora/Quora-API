import { combineReducers } from 'redux';
import * as ActionTypes from './../actions';

function validURL(state = {}, action) {
  switch (action.type) {
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
  counter
});

export default rootReducer;
