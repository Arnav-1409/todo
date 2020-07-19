import ACTIONS from './../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state, action: action.payload
      };
    case ACTIONS.DELETE_USER:
      return {
        ...state, action: action.payload
      };
    case ACTIONS.EDIT_TODO:
      return {
        ...state, name: action.payload
      };
    default:
      return { ...state };
  }
}