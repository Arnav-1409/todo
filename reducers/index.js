import { combineReducers } from 'redux';
import userReducer from './userReducer';
import todoReducer from './todoReducer'


export {
  userReducer, todoReducer,
}

export default combineReducers({
  userReducer: userReducer,
  todoReducer: todoReducer,
});