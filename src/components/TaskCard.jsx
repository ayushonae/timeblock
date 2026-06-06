
function TaskCard({task}) {
    return (<div>
        <h3>{task.title}</h3>
        <p>Duration : {task.duration}</p>
        <p>Priority : {task.priority}</p>
        <p>Status : {task.completed ? "Completed" : "Pending"}</p>
    </div>
    );
}
export default TaskCard;