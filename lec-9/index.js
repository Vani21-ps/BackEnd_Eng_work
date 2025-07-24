const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/register', (req, res) => {
  res.send(`
    <form action="/register" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required />
      <input type="email" name="email" placeholder="Enter your email" required />
      <input type="password" name="password" placeholder="Enter your password" required />
      <button type="submit">Register</button>
    </form>
  `);
});


// POST route to handle form submission
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  console.log('Registration received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  // Here you can add DB logic

  res.send('✅ Registration successful!');
});

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});