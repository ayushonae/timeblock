

function Dashboard({
  totalTasks,
  completedTasks,
  pendingTasks,
}) {
  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
}

export default Dashboard;