import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import DashBoard from "./components/DashBoard";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
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
      })
    );
  }

  let filteredTasks = tasks;

  if (filter === "Completed") {
    filteredTasks = tasks.filter(
      (task) => task.completed
    );
  }

  if (filter === "Pending") {
    filteredTasks = tasks.filter(
      (task) => !task.completed
    );
  }

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter((task) => task.completed).length;

  const pendingTasks =
    tasks.filter((task) => !task.completed).length;

  return (
    <>
      <TaskForm addTask={addTask} />

      <DashBoard
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
      />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  );
}

export default App;