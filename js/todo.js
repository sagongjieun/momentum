const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];
const TODO_CLASS_NAME = "todoList";
const TODO_DELETE_CLASS_NAME = "todoDeleteBtn";

function saveToDos() { //toDos array를 localStorage에 집어넣는 역할
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
     const li = document.createElement("li");
     li.id = newTodo.id;
     const span = document.createElement("span");
     span.innerText = newTodo.text;
     const button = document.createElement("button");

     button.innerText = "X";
     button.addEventListener("click", deleteToDo);

     li.classList.add(TODO_CLASS_NAME);
     button.classList.add(TODO_DELETE_CLASS_NAME);

     li.appendChild(span);
     li.appendChild(button);
     toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //todo 리스트를 구분해주는 id
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}