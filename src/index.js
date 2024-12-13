import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ProductProvider } from "./context/ProductContext.js";
import { ShopContextProvider } from './context/shopContext-old.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
  <React.StrictMode>
  <ShopContextProvider>
      <App />
  </ShopContextProvider>
  </React.StrictMode>
  </ProductProvider>
);
