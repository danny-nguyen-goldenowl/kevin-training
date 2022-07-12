import rootReducers from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
