import 'whatwg-fetch';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import './assets/styles/reset.css';
import 'react-datepicker/dist/react-datepicker.css';
import './assets/styles/modal.css';
import './assets/styles/typography.css';
import './assets/styles/utils.css';
import './assets/styles/datepicker.css';
import './index.css';
import reducers from './reducers/index';
// import { logger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/index';
import { conditionallyRender } from './app-render';

/*

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}
*/

const sagaMiddleware = createSagaMiddleware();

import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const reducer = combineReducers({...reducers,
  router: routerReducer });

const middleware = applyMiddleware(
  // logger,
  sagaMiddleware,
  routerMiddleware(history)
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);

conditionallyRender(store, history);
