let tasks = ['Я хочу сделать список задач'];
const todoBtn = document.querySelector('.todo__btn');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');
const todoBtnsClose = document.querySelectorAll('.todo__close-btn');

window.onload = function () {
  render(tasks);
};

const handleClickAdd = () => {
  const valueInput = todoInput.value;
  tasks.push(valueInput);
  todoInput.value = '';
  render(tasks);
};

const handleClickRemove = (index) => {
  tasks.splice(index, 1);
  render(tasks);
};

const clearList = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
};

const render = (arrayTasks) => {
  clearList();
  arrayTasks.map((task, index) => {
    return todoList.insertAdjacentHTML(
      'beforeend',
      `<li>${task} <button class='todo__close-btn' onclick='handleClickRemove(${index})' data-index='${index}'>x</button></li>`,
    );
  });
};

todoBtn.addEventListener('click', handleClickAdd);
