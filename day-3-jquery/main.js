let todos = ['Learn Js'];
$('.form-todo').submit(function (e) {
  e.preventDefault();
  let title = $('#title').val();
  $('#title').val('');
  todos.push(title);
  renderTodo();
});

function renderTodo() {
  let newTodos = todos.map((todo, index) => {
    return `<li>
                <input type="checkbox" name="todo-item">
                <span class="todo-title">${todo}</span>
                <button class="btn-delete" onclick="deleteTodo(${index})">xoa</button>
            </li>`;
  });
  $('.list-todo').html(newTodos.join(''));
}
function deleteTodo(id) {
  todos = todos.filter((todo, index) => index != id);
  renderTodo();
}

renderTodo();
