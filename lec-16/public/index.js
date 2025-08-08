
async function getCommentData() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

getCommentData();

function adduser(email,password) {
  console.log("bbb");
    axios.post('/user', {
    email:email,
    password:password
  })
  .then((res)=>{
console.log(res.data);
  })
  .catch((err)=>{
console.log(err.message);
  })
}
adduser("vani@gmail.com", "123456");
