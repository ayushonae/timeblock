import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import DashBoard from "./components/DashBoard";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <TaskForm addTask={addTask} />
     <TaskList tasks={tasks} />
    </>
  );
}

export default App;
