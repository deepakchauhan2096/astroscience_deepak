// actions/pageActions.js
import { INCREMENT_PAGE, DECREMENT_PAGE, SET_PAGE } from './types';

export const incrementPage = (event) => ({
  type: INCREMENT_PAGE,
  payload:event
});

export const decrementPage = () => ({
  type: DECREMENT_PAGE,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
