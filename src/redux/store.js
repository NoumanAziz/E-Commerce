import { createStore , applyMiddleware, compose } from 'redux';
import rootReducer  from './root.reducer';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [logger]
export const store = createStore (rootReducer , composeEnhancers(applyMiddleware(...middleWare)));
export const persistor = persistStore(store);