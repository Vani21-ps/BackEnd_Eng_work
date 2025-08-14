const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const API_URL = "http://localhost:4113/tasks"; 

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.render("index", { tasks: response.data });
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.render("index", { tasks: [] });
    }
});


app.post("/add", async (req, res) => {
    console.log("✅ /add route hit with data:", req.body); // <-- Add this line for debugging

    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = { title, completed: false };

    try {
        await axios.post(`${API_URL}`, newTask);

        res.status(201).json({ message: "Task added successfully", newTask });

    } catch (error) {
        console.error("Error adding task:", error.message);
        res.status(500).json({ error: "Could not add task" });
    }
});




app.delete("/delete/:id", async (req, res) => {
    const taskId = req.params.id;

    try {
        await axios.delete(`${API_URL}/${taskId}`);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error.message);
        res.status(500).json({ error: "Could not delete task" });
    }
});


app.put("/update/:id", async (req, res) => {
    const taskId = req.params.id;
    const { title, completed } = req.body;

    try {
        await axios.patch(`${API_URL}/${taskId}`, { title, completed });
        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        console.error("Error updating task:", error.message);
        res.status(500).json({ error: "Could not update task" });
    }
});
// New route to return tasks as JSON
app.get("/api/tasks", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data); // <-- This sends raw JSON
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.status(500).json({ error: "Could not fetch tasks" });
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
