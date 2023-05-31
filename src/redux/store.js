import {applyMiddleware, legacy_createStore as createStore} from 'redux'

// 引入中间间=件 支持异步actio
import thunk from 'redux-thunk'

// 引入开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'

// 引入reducer
import allreducers from './reducers/index'

// 暴露store
export default createStore(allreducers,composeWithDevTools(applyMiddleware(thunk)))