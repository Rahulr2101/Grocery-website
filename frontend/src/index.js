import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {app} from "./firebase.config"
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import 'react-toastify/dist/ReactToastify.css';
import Context from "./context/Context"
ReactDOM.render(
  <Provider store={store} app={app}>
  <App />,
  </Provider>,
  document.getElementById('root')
);
