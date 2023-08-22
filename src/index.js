// importing from node modules
// if we want to import from node modules -> direct import
import React from 'react';
import ReactDOM from 'react-dom/client';

// importing from user -> custom import
// ./ -> this symbol is used for importing from current package
import './index.css';
import App from './App'; // importing app component
import reportWebVitals from './reportWebVitals'; // analytics purpose

// finding div with id root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
