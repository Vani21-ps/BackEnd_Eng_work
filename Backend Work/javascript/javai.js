import React, { useState, useEffect } from "react";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("Fetching tasks from backend...");
    fetch("http://localhost:5001/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched tasks:", data);
        setTasks(data);
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const addTask = () => {
    if (!task) return;
    console.log("Adding task:", task);
    fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task added:", data);
        setTasks([...tasks, data]);
        setTask("");
      })
      .catch((err) => console.error("Error adding task:", err));
  };

  const deleteTask = (id) => {
    console.log("Deleting task with ID:", id);
    fetch(`http://localhost:5001/tasks/${id}`, { method: "DELETE" })
      .then(() => {
        console.log("Task deleted");
        setTasks(tasks.filter((t) => t.id !== id));
      })
      .catch((err) => console.error("Error deleting task:", err));
  };

  return (
    <div className="app-container">
      <h1 className="heading">My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <div className="task-list">
        {tasks.map((t) => (
          <div key={t.id} className="task-card">
            <span className="task-text">{t.task}</span>
            <button
              onClick={() => deleteTask(t.id)}
              className="delete-button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;