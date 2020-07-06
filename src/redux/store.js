import { createStore , applyMiddleware, compose } from 'redux';
import rootReducer  from './root.reducer';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [logger]
export const store = createStore (rootReducer , composeEnhancers(applyMiddleware(...middleWare)));