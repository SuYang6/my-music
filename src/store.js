/**
 * Created by Z on 2017/12/25.
 */
import {createStore, compose, applyMiddleware} from 'redux'

import rootReducer from './reducer/index'
import { createBrowserHistory} from 'history'
import { routerMiddleware } from 'react-router-redux'
export const history = createBrowserHistory();

// Create a history of your choosing (we're using a browser history in this case)
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);
// 初始值
const initState = {};


// 启用中间件
const middlewares = [historyMiddleware];

// 高阶，window.devToolsExtension 是启用redux-devTools，使浏览器具有redux“时间旅行”功能
const enhancers = compose(applyMiddleware(...middlewares), (window && window.devToolsExtension ? window.devToolsExtension() : f => f ));
// 创建store
const store = createStore(rootReducer, initState, enhancers);

export default store;

