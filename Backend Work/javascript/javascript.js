const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/tasks", (req, res) => {
  console.log("Fetching all tasks...");
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body.task;
  if (!newTask) {
    console.log("Task content is empty. Returning error.");
    return res.status(400).json({ message: "Task cannot be empty!" });
  }

  const task = { id: nextId++, task: newTask };
  tasks.push(task);
  console.log("Added task:", task);
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  tasks = tasks.filter((task) => task.id !== id);
  console.log(`Deleted task with ID: ${id}`);
  res.json({ message: "Task deleted" });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
