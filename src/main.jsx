import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/index";
import firebase from "../firebase.js";
import { initializeApp } from "firebase/app";
import App from './App.jsx';
import './styles/main.scss';

initializeApp(firebase);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <BrowserRouter basename='/sirius-future-edu-platform/'>
      <Provider store={ store}>
        <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
