const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.get("/", (req, res) => {
      console.log(req);  
      res.json({ 
        name:"Vishakha",
        address:"Punjab",
    }); 
});

app.get("/user/:id", (req, res) => {
   console.log(req.params.id);
    let id=req.params.id;
    res.send(id);
});

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    console.log(req.query);
    const { username, password } = req.query;
    res.send(`Username: ${username}, Password: ${password}`);
});

// POST /login { username, password }
loginRouter.post('/', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
});

app.use('/login', loginRouter);
app.use((req,res,next)=>{
    console.log("Request received");
    next(); 
})
app.post("/user", (req, res) => {
    const newUser = req.body;
    fs.readFile('users.json', 'utf8', (err, data) => {
        let users = [];
        if (!err && data) {
            try {
                users = JSON.parse(data);
            } catch (parseErr) {
                console.error("Failed to parse JSON", parseErr);
            }
        }
        users.push(newUser);
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Failed to save user');
            }
            res.send('User data saved');
        });
    });
});

app.put("/user/:id", (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    console.log(req.body);
    res.send(`User with ID ${id} updated`);
});
app.listen(port, () => {
  console.log( `Server is running at ${port}`);
});