import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducer.js'

//第二个参数是调试用的
const store =createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;