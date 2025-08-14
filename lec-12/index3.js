//how to insert new element in dom
//1. create a new element---> createElement
//2. add required data in that element using innertext or innerhtml
//3. add that element in parent container
let todo={
    id:3435435,
    title:"Todo4"
}
let ul=document.querySelector(".todoList")

function addToDo(todo){
    let li =document.createElement("li");
    li.setAttribute("id",`${todo.id}`)
    li.innerhtml=`<div>
                <input type="checkbox" name="" id="check1">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">+</button>
                    <button class="delete">-</button>
                    <p>well done</p>
                </div>
            </div>`
            ul.appendChild(li);
}
addTodo(todo);