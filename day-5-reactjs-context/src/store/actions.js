import { ADD_TODO, GET_TODOS, CHANGE_STATUS, DELETE_TODO } from './constants';

export const getAllTodos = (payload) => ({
  type: GET_TODOS,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const changeStatus = (payload) => ({
  type: CHANGE_STATUS,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
