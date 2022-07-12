import { GET_TODOS, ADD_TODO } from '../constants';

const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      console.log('todostate', state);
      return {
        ...state,
        todos: [...action.payload]
      };
    case ADD_TODO:
      console.log('todostate', state);
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}

export default todoReducer;
