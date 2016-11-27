import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import {DashboardContainer} from './containers';
import {Map, fromJS} from 'immutable';
import styles from '../scss/style.scss';
import io from 'socket.io-client';
import {setState} from './actions';
import remoteActionMiddleware from './remote_action_middleware';

const initialState = fromJS(JSON.parse(document.getElementById('initial-state').innerHTML));
const socket = io.connect(window.location.href);
socket.on('state', state => {
  store.dispatch(setState(state.state));
});
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <DashboardContainer />
  </Provider>,
  document.getElementById('view')
);
