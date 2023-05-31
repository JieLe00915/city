import React from 'react';
import "./assets/css/common.less"
import "./assets/css/font.css"
import "./assets/css/iconfont.css"
import "./assets/usercss/iconfont.css"

import {BrowserRouter} from 'react-router-dom'

import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import "./utils/init"
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
       
     </BrowserRouter>
,
  document.getElementById('root')
)
