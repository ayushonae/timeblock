import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet 🚀</h3>
        <p>Create your first task.</p>
      </div>
    );
  }
  return (
    <div className="task-list">
      <h2>Task List</h2>

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
