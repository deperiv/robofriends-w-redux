import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers.js';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
