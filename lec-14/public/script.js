function getUser(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        data.forEach(user => {
            displayUser(user);
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}
// getUser("https://jsonplaceholder.typicode.com/users");
getUser("http://localhost:3000/user");

let userContainer = document.querySelector(".user-container")
function displayUser(user){
    let li = document.createElement("li");
    li.innerHTML=`<div class="user-info">
            <div>
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>`
    userContainer.appendChild(li);
}
