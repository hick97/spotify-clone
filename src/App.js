import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/reactotron';
import GlobalStyle from './styles/global';


import history from './services/history';

import Routes from './routes';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
