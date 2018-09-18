import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App';
import configureStore from './store/configurestore'
import rootSaga from './sagas'

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(<App />, document.getElementById('root'));
