import { useDispatch } from 'react-redux';
import { changeStatus, deleteTodo } from '../store/actions/todoAction';

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <li className="my-5">
      <div className="flex justify-between">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => dispatch(changeStatus({ id, title, completed }))}
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
          onClick={() => dispatch(deleteTodo(id))}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
