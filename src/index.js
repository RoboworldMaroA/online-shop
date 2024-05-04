
//index.js used in frontend
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {configureStore } from '@reduxjs/toolkit';
import { Provider} from 'react-redux';

import productsReducer, {productFetch} from './features/productsSlice.js';

import { productsApi } from './features/poductsAPI.js';
import cartReducer, { getTotals } from './features/cartSlice.js';
import authReducer, { loadUser } from './features/authSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware)
  },
});

//get data from features/productSlice
store.dispatch(productFetch());
//get a total value in the basket
store.dispatch(getTotals());
//load user- import
store.dispatch(loadUser(null)); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider allows access to variable in all components */}
    <Provider store = {store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);

