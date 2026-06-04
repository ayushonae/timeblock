import { useState } from 'react'

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <h1>TimeBlock</h1>
      <p>Plan your day intelligently</p>

      <TaskForm />

      <FilterBar />

      <Dashboard />

      <TaskList />
    </>
  );
}

export default App;