
function TaskCard({task, deleteTask, toggleTask}) {
    return (<div>
        <h3>{task.title}</h3>
        <p>Duration : {task.duration}</p>
        <p>Priority : {task.priority}</p>
        <p>Status : {task.completed ? "Completed" : "Pending"}</p>
        <button onClick={()=> deleteTask(task.id)}>Delete</button>
        <button onClick={() => toggleTask(task.id)}>  {task.completed ? "Undo" : "Complete"} </button>
 

    </div>
    );
}
export default TaskCard;