import ACTIONS from '../constants/actions';

export const addUser = (name) => {
  return {
    type: ACTIONS.ADD_USER,
    payload: name
  };
}

export const editUser = (name) => {
  return {
    type: ACTIONS.EDIT_USER,
    payload: name
  };
}

export const deleteUser = (name) => {
  return {
    type: ACTIONS.DELETE_USER,
    payload: name
  };
}