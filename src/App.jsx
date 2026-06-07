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

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      }),
    );
  }

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}
       deleteTask={deleteTask} 
        toggleTask={toggleTask} />
      
    </>
  );
}

export default App;
