import { useState } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskFrom";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // إضافة تاسك جديد
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: "todo"
    };
    setTasks([...tasks, newTask]);
  };

  // تغيير مكان المهمة (تحريك بين الأعمدة)
  const moveTask = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="app-container">
      <h1>Kanban Board</h1>

      <TaskForm addTask={addTask} />

      <div className="columns">
        <Column title="To Do" tasks={tasks} status="todo" moveTask={moveTask} />
        <Column title="In Progress" tasks={tasks} status="inprogress" moveTask={moveTask} />
        <Column title="Done" tasks={tasks} status="done" moveTask={moveTask} />
      </div>
    </div>
  );
}

export default App;
