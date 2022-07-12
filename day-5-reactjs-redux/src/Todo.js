import TodoItem from './components/TodoItem';
import { useEffect, useMemo, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getAllTodos } from './store/actions/todoAction';
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [title, setTitle] = useState('');
  let titleElement = useRef();

  // Add new Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    titleElement.current.value = '';
    dispatch(addTodo({ title, completed: false }));
  };

  // Get all todo from mock api
  useEffect(() => {
    dispatch(getAllTodos());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // calculate task
  let totalTask = useMemo(
    () => (todos.length !== 0 ? todos.length : 0),
    [todos]
  );
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
                todos.map((todo, index) => (
                  <TodoItem
                    key={index}
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
