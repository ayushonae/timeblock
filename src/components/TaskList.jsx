import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );

}
export default TaskList;