// 数据的持久化

import store from '../redux/store'
import {setLogin} from '../redux/actions/login'
if (localStorage.getItem('goodlive')) {
    store.dispatch(setLogin(JSON.parse(localStorage.getItem('goodlive'))))
}