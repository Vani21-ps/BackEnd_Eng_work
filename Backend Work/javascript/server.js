const express = require("express");
const app = express();

// Define a GET route for the root URL
app.get("/", (req, res) => {
    res.sendFile("open editors/index.html", { root: __dirname});
});

// Start the server
app.listen(3022, () => {
    console.log(`Server is running on port 3022`);
});
