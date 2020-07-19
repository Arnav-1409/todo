import ACTIONS from './../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return {
        ...state, name: action.payload
      };
    case ACTIONS.DELETE_USER:
      return {
        ...state, name: action.payload
      };
    case ACTIONS.EDIT_USER:
      return {
        ...state, name: action.payload
      };

    default:
      return { ...state };
  }
}