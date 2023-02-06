import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './index.css'
import store from './slices/index.js';

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
