import { useStore } from '../store';
import { actions } from '../store';
import axios from 'axios';

function TodoItem({ id, title, completed }) {
  const [state, dispatch] = useStore();
  console.log(state);
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    dispatch(actions.deleteTodo(id));
  };

  const changeStatus = async (todo) => {
    await axios.put(`http://localhost:5000/todos/${todo.id}`, {
      title: todo.title,
      completed: !todo.completed,
    });
    dispatch(actions.changeStatus(todo.id));
  };
  return (
    <li className="my-5">
      <div className="flex justify-between">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => changeStatus({ id, title, completed })}
            className="check"
          />
          <span
            className={`inline-block ml-5 text-md ${
              completed ? `line-through` : ``
            }`}
          >
            {title}
          </span>
        </div>
        <button
          className="px-2 py-1 text-sm text-red-500 bg-red-200 rounded-md"
          onClick={() => deleteTodo(id)}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
