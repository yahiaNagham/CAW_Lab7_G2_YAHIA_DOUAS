import TaskCard from "./TaskCard";

function Column({ title, tasks, status, moveTask }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <TaskCard key={task.id} task={task} moveTask={moveTask} />
        ))
      }
    </div>
  );
}

export default Column;
