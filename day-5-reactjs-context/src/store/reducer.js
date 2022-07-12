import { GET_TODOS, ADD_TODO, DELETE_TODO, CHANGE_STATUS } from './constants';

const initState = {
  todos: [],
};
function reducer(state, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: [...action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
}

export { reducer, initState };
