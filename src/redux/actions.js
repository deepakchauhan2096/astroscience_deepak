// actions.js
import {
  INCREMENT,
  DECREMENT,
} from './actionTypes';

export const addTodo = (text) => ({
  type: INCREMENT,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: DECREMENT,
  payload: { id },
});

