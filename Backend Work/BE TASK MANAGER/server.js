const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// JSON Server Middleware
const router = jsonServer.router("db.json");
app.use("/api", router);

// Home Route
app.get("/", async (req, res) => {
    try {
        const response = await fetch("http://localhost:3001/tasks");
        const tasks = await response.json();
        res.render("index", { tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.render("index", { tasks: [] });
    }
});

// Add Task
app.post("/add", async (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = { title, completed: false };

    try {
        await fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        });
        res.redirect("/");
    } catch (error) {
        console.error("Error adding task:", error.message);
        res.status(500).json({ error: "Could not add task" });
    }
});

// Delete Task
app.delete("/delete/:id", async (req, res) => {
    const taskId = req.params.id;

    try {
        await fetch(`http://localhost:3001/tasks/${taskId}`, {
            method: "DELETE",
        });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error.message);
        res.status(500).json({ error: "Could not delete task" });
    }
});

// Update Task
app.put("/update/:id", async (req, res) => {
    const taskId = req.params.id;
    const { title, completed } = req.body;

    try {
        await fetch(`http://localhost:3001/tasks/${taskId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, completed }),
        });
        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        console.error("Error updating task:", error.message);
        res.status(500).json({ error: "Could not update task" });
    }
});

// Start Servers
app.listen(3000, () => console.log(`✅ Server running on http://localhost:3000`));
router.listen(3001, () => console.log(`✅ JSON Server running on http://localhost:3001`));
