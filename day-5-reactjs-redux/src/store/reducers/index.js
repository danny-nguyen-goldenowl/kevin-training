import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducers = combineReducers({
  todo: todoReducer
  //other reducers come here...
});

export default rootReducers;
