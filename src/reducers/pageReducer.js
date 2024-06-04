// reducers/pageReducer.js
import { INCREMENT_PAGE, DECREMENT_PAGE, SET_PAGE } from '../actions/types';

const initialState = {
  count: 1,
  total: 10, // Adjust this to your actual total pages
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return {
        ...state,
        count: state.count < action.payload ? state.count + 1 : action.payload,
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        count: state.count > 1 ? state.count - 1 : 1,
      };
    case SET_PAGE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
