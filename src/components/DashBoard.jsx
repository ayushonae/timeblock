function Dashboard({ totalTasks, completedTasks, pendingTasks }) {
  return (
    <div className="card">
  <h2>Dashboard</h2>

  <div className="dashboard-grid">
    <div className="stat-card">
      <span>Total Tasks</span>
      <h3>{totalTasks}</h3>
    </div>

    <div className="stat-card">
      <span>Completed</span>
      <h3>{completedTasks}</h3>
    </div>

    <div className="stat-card">
      <span>Pending</span>
      <h3>{pendingTasks}</h3>
    </div>
  </div>
</div>
  );
}

export default Dashboard;
