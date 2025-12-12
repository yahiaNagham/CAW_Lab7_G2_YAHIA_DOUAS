function TaskCard({ task, moveTask }) {
  return (
    <div className="task-card">
      <p>{task.title}</p>

      <div className="actions">
        {task.status !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>To Do</button>
        )}
        {task.status !== "inprogress" && (
          <button onClick={() => moveTask(task.id, "inprogress")}>Progress</button>
        )}
        {task.status !== "done" && (
          <button onClick={() => moveTask(task.id, "done")}>Done</button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
