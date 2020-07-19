import ACTIONS from '../constants/actions';

export const addTodo = (action) => {
  return {
    type: ACTIONS.ADD_TODO,
    payload: action
  };
}

export const editTodo = (id) => {
  return {
    type: ACTIONS.EDIT_TODO,
    payload: id
  };
}

export const deleteTodo = (action) => {
  return {
    type: ACTIONS.DELETE_TODO,
    payload: action
  };
}