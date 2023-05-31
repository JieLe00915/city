import city from './city'
import search from './search'
import login from './login'
import collect from './collect'
// 引入组件 合成多个reducer
import {combineReducers} from 'redux'

export default combineReducers({
    city,
    search,
    login,
    collect
    
})