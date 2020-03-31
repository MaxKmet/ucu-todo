import Stepan from '/src/lib/stepan.js';

import {
  TodoListHead,
  TodoListToggleAll,
  TodoList
} from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

const todos = [
  {isDone: true, title: '(Done) Todo 1'},
  {isDone: false, title: 'Todo 2'}
];

class App extends Stepan.Component {
  constructor(parent, todoList = []) {
    super(parent);
    this.todos = todoList;
  }

  render(todos =  []) {
    
    const rootElement = this.parent;
    const divContainer = Stepan.createElement('div', rootElement);

    // TodoListHead-----------------
    this.todoListHead = new TodoListHead(divContainer);
    this.todoListHead.render();

    // TodoListToggleAll-----------------
    
    const sectionMain = Stepan.createElement('section', divContainer, { class: 'main' });
    this.todoListToggleAll =  new TodoListToggleAll(sectionMain);
    this.todoListToggleAll.render();
    

    // TodoList-----------------
    this.todoList = new TodoList(sectionMain);
    this.todoList.render(this.todos);


    // Footer-----------------
    this.footer = new Footer(divContainer);
    this.footer.render(this.todos);

    return rootElement
  }
}


function setEvents() {
  let input = document.getElementById("new-todo");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      app.todoList.push({ isDone: false, title: input.value});
      app.todoListNode.render(app.todo);
      app.footerNode.render(app.todo);
    }
  });
}

var app = new App(document.getElementById('todoapp'), todos);
app.render();
setEvents();