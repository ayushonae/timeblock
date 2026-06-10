import { useState } from "react";

function TaskCard({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDuration, setEditedDuration] = useState(task.duration);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  return (
    <div className="task-card">
      {isEditing ? (
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <h3>{task.title}</h3>
      )}
      {isEditing ? (
        <select
          value={editedDuration}
          onChange={(e) => setEditedDuration(e.target.value)}
        >
          <option value="30 Minutes">30 Minutes</option>

          <option value="1 Hour">1 Hour</option>

          <option value="2 Hours">2 Hours</option>

          <option value="3 Hours">3 Hours</option>
        </select>
      ) : (
       <p>⏱ {task.duration}</p>
      )}
      {isEditing ? (
        <select
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value)}
        >
          <option value="High">High</option>

          <option value="Medium">Medium</option>

          <option value="Low">Low</option>
        </select>
      ) : (
        <p>
          Priority
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
        </p>
      )}

      <p>
        Status 
        <span className={`status ${task.completed ? "completed" : "pending"}`}>
          {task.completed ? "Completed" : "Pending"}
        </span>
      </p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleTask(task.id)}>
        {" "}
        {task.completed ? "Undo" : "Complete"}{" "}
      </button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {isEditing && (
        <button
          onClick={() => {
            editTask(task.id, editedTitle, editedDuration, editedPriority);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
}
export default TaskCard;
