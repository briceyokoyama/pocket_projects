const todos = JSON.parse(localStorage.getItem('todos')) || [];
const ulElement = document.getElementsByClassName('todos')[0];
const formElement = document.getElementsByClassName('add-todo-form')[0];
const divElement = document.getElementsByClassName('todo-container')[0];

function addTodo(e) {
  e.preventDefault();
  const inputElement = document.querySelector('[name="add-todo"]');
  const todo = {
    value: inputElement.value,
    done: false,
  }
  todos.push(todo);
  inputElement.value = '';
  populateList(todos);
}

function populateList(todos) {

  Array(...ulElement.children).forEach(child => child.remove());

  todos.forEach((todo, index) => {
    let labelElement = document.createElement('label');
    let checkboxElement = document.createElement('input');
    let listElement = document.createElement('li');

    labelElement.innerText = todo.value;

    checkboxElement.type = 'checkbox';
    checkboxElement.checked = todo.done;
    checkboxElement.dataset.id = index;

    listElement.appendChild(checkboxElement);
    listElement.appendChild(labelElement);

    ulElement.append(listElement);
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}

function click(e) {
  if (e.target.type === 'checkbox') {
    todos[e.target.dataset.id].done = e.target.checked;
  }
  populateList(todos);
}

populateList(todos);
formElement.addEventListener('submit', addTodo);
divElement.addEventListener('click', click);