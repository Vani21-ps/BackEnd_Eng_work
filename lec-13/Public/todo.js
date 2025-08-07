
let todoInput= document.querySelector("#todoInput");
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".todoContainer");

let TodoArray = [];
fetch("http://localhost:5000/todos")
.then(response => response.json())
.then(data => {         
    TodoArray = data;
    showAllTodos(TodoArray);
})
todoForm.addEventListener("submit" , function(e){
e.preventDefault();
let value=inputValue();
let newTodo={
    id: Math.random() * 10000,
    title: value
}
addToDo(newTodo)
    todoInput.value=""
})
function inputValue(){
    return todoInput.value
}
function addToDo(todo){
    let li =document.createElement("li");
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="check1">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">+</button>
                    <button class="delete">-</button>
                    <p>well done</p>
                </div>
            </div>`
            todoContainer.appendChild(li);
}
function showAllTodos(todos){
    todoList.innerHTML = "";
    todos.forEach(todo=>{
        addToDo(todo);
    })
}   