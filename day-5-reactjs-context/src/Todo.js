import TodoItem from './components/TodoItem';
import { useEffect, useMemo, useState, useRef } from 'react';
import { useStore } from './store';
import { actions } from './store';
import axios from 'axios';
function Todo() {
  const [title, setTitle] = useState('');
  const [state, dispatch] = useStore();
  const { todos } = state;

  let titleElement = useRef();
  // Add new Todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    titleElement.current.value = '';
    let res = await axios.post('http://localhost:5000/todos', {
      title,
      completed: false,
    });
    dispatch(actions.addTodo(res.data));
  };

  //Get all todo from mock api
  useEffect(() => {
    async function getAllTodos() {
      let res = await axios.get('http://localhost:5000/todos');
      let todos = res.data;
      dispatch(actions.getAllTodos(todos));
    }
    getAllTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // calculate task
  let totalTask = useMemo(() => todos.length, [todos]);
  let completedTask = useMemo(() => {
    return todos.length !== 0
      ? todos.filter((todo) => todo.completed === true).length
      : 0;
  }, [todos]);
  let IncompletedTask = totalTask - completedTask;

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="Todo mt-10 bg-white p-3 rounded-md">
          <h1 className="text-2xl font-bold text-center">Todo</h1>
          <div className="divide-y mt-3">
            <form
              action=""
              className="flex items-center"
              onSubmit={handleSubmit}
            >
              <input
                ref={titleElement}
                type="text"
                className="flex-1 text-md text-gray-600 outline-none py-1 px-2 border rounded-lg"
                placeholder="Input some tasks"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="py-1 px-2 bg-blue-400 text-sm text-white font-semibold rounded-lg m-2">
                + Add
              </button>
            </form>
            <div className="mt-2">
              <span className="py-1 px-2 bg-blue-400 text-sm text-white font-semibold rounded-lg m-2 inline-block">
                All Tasks: {totalTask}
              </span>
              <span className="py-1 px-2 bg-red-400 text-sm text-white font-semibold rounded-lg m-2 inline-block">
                In complete: {IncompletedTask}
              </span>
              <span className="py-1 px-2 bg-green-400 text-sm text-white font-semibold rounded-lg m-2 inline-block">
                Completed: {completedTask}
              </span>
            </div>
            <ul className="mt-2">
              {todos &&
                todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
