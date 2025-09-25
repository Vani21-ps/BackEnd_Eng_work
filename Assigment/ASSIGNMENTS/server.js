const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// To serve static HTML files from public folder
app.use(express.static('public'));

// To read data sent in JSON format
app.use(express.json());

// This function reads the users from users.json file
function getUsers() {
  try {
    const fileData = fs.readFileSync('users.json', 'utf8');
    const users = JSON.parse(fileData);
    return users;
  } catch (error) {
    // If file not found or empty, return empty list
    return [];
  }
}

// This function saves the users array into users.json file
function saveUsers(users) {
  const data = JSON.stringify(users, null, 2);
  fs.writeFileSync('users.json', data);
}

// When user submits the form, this route will save the user
app.post('/user', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const rollno = req.body.rollno;

  // If any field is missing
  if (!name || !email || !rollno) {
    res.status(400).send('All fields are required');
    return;
  }

  const users = getUsers(); // Get existing users
  users.push({ name: name, email: email, rollno: rollno }); // Add new one
  saveUsers(users); // Save all users back to file

  res.send('User added successfully');
});

// This route will send all users when homepage is opened
app.get('/users', function (req, res) {
  const users = getUsers();
  res.json(users);
});

// Start the server
app.listen(PORT, function () {
  console.log('Server is running on http://localhost:' + PORT);
});