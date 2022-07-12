import axios from 'axios';
import { ADD_TODO, GET_TODOS } from '../constants';

export const getAllTodos = () => {
  return async (dispatch) => {
    let res = await axios.get('http://localhost:5000/todos');
    let todos = res.data;
    dispatch({ type: GET_TODOS, payload: todos });
  };
};

export const addTodo = (data) => {
  return async (dispatch) => {
    let res = await axios.post('http://localhost:5000/todos', data);
    let todo = res.data;
    dispatch({ type: ADD_TODO, payload: todo });
  };
};

export const changeStatus = ({ id, title, completed }) => {
  return async (dispatch) => {
    await axios.put(`http://localhost:5000/todos/${id}`, {
      title,
      completed: !completed
    });
    dispatch(getAllTodos());
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    dispatch(getAllTodos());
  };
};
