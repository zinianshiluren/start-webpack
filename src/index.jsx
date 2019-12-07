import React from 'react';
import {render} from 'react-dom';
import './index.css'
import  Home from './containers/home/index.jsx'
import  Predraw from './containers/Predraw/index.jsx'
import  First from './containers/first/index.jsx'
import API from './api/api.js'
import Example from'./containers/example/example.jsx'
import App from './containers/estateList/index.jsx'
import { Provider } from 'react-redux';
import store from './store/index.js';
import ReactDOM from 'react-dom';

var root = document.createElement('div');
document.body.appendChild(root);

render(<Provider store={store}>
    <App />
</Provider>, root);
