const todos = []
const ulElement = document.getElementsByClassName('todos')[0];
const formElement = document.getElementsByClassName('add-todo-form')[0];

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

  todos.forEach(todo => {
    let labelElement = document.createElement('label');
    let checkboxElement = document.createElement('input');
    let listElement = document.createElement('li');

    labelElement.innerText = todo.value;

    checkboxElement.type = 'checkbox';
    checkboxElement.checked = todo.done;

    listElement.appendChild(checkboxElement);
    listElement.appendChild(labelElement);

    ulElement.append(listElement);
    console.count("x");
  });

}

formElement.addEventListener('submit', addTodo);