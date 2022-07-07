let todosElement = document.querySelector('.list-todo');
let todos = ['Learn Javascript'];
function addNewTodo() {
  let formTodo = document.querySelector('.form-todo');
  let titleElement = document.querySelector('#title');
  formTodo.onsubmit = function (e) {
    e.preventDefault();
    let title = titleElement.value;
    titleElement.value = '';
    todos.push(title);
    renderTodo();
  };
}

function renderTodo() {
  let newTodos = todos.map((todo, index) => {
    return `
        <li>
            <input type="checkbox" name="todo-item">
            <span class="todo-title">${todo}</span>
            <button class="btn-delete" onclick="deleteTodo(${index})">xoa</button>
        </li>
        `;
  });
  todosElement.innerHTML = newTodos.join('');
}
function deleteTodo(id) {
  todos = todos.filter((todo, index) => index != id);
  renderTodo();
}

function start() {
  addNewTodo();
  renderTodo();
}

start();
