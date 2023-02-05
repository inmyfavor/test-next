import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';
import './index.css'
import store from './slices/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  </React.StrictMode>
);
