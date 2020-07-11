import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import { store, persistor } from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'
import 'semantic-ui-css/semantic.min.css'



ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
        <PersistGate persistor = {persistor} >
          <App />
        </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
