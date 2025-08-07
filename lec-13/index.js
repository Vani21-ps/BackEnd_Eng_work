//how to insert new element in dom
//1. create a new element---> createElement
//2. add required data in that element using innertext or innerhtml
//3. add that element in parent container
let todo={
    id:3435435,
    title:"todo4"
},
todo2={
    id:25649548,
    title:"todo5"
}
let ul=document.querySelector(".todoContainer")

function addToDo(todoItem){
    let li =document.createElement("li");
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="check1">
                <h1>${todoItem.title}</h1>
                <div>
                    <button class="edit">+</button>
                    <button class="delete">-</button>
                    <p>well done</p>
                </div>
            </div>`
            ul.appendChild(li);
}

function showAllTodos(todoArray){
    todoArray.forEach(todoItem=>{
        addToDo(todoItem);
    })
}

// Create an array of todos and display them
let todoArray = [todo, todo2];
showAllTodos(todoArray);