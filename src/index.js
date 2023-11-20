import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from './redux/store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store = {store}>
      <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
