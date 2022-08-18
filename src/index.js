import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from 'react-router-dom/Router';

import { Provider } from "react-redux";


ReactDOM.render(
   <App />
    , document.getElementById('root'));

serviceWorker.register();
