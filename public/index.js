import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configurestore";
import rootSaga from "./sagas";

const store = configureStore({
  validURL: false,
  counter: 0,
  apiOutput: { json: { ans: "The answer to universe is 42." }, loading: false }
});
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
