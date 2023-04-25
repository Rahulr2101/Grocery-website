import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import {store,persistor} from "./redux/store"
import 'react-toastify/dist/ReactToastify.css';
import Context from "./context/Context"
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate Loading ={"Loading"} persistor={persistor}>
  <App />,
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);
