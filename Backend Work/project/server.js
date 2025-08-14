const express = require("express");
const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
// Define a GET route for the root URL
app.get("/", (req, res) => {
    res.render("main");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/cart", (req, res) => {
    res.render("cart");
});


// Start the server
app.listen(3044, () => {
    console.log(`Server is running..`);
});