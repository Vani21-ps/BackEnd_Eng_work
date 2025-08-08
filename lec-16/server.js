const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user", (req, res) => {
    console.log("aaa");
  try {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email, password);

    res.json({
      success: true,
      message: "User data received successfully",
      data: {
        email,
        password
      }
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
