import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [priority, setPriority] = useState("");

  const [customDurationValue, setCustomDurationValue] = useState("");
  const [customDurationUnit, setCustomDurationUnit] = useState("Minutes");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }

  function handleCustomDurationValueChange(event) {
    setCustomDurationValue(event.target.value);
  }

  function handleCustomDurationUnitChange(event) {
    setCustomDurationUnit(event.target.value);
  }

  function handleAddTask() {
    let taskDuration;

    if (duration === "Custom") {
      taskDuration = `${customDurationValue} ${customDurationUnit}`;
    } else {
      taskDuration = duration;
    }

    const newTask = {
      id: Date.now(),
      title,
      duration: taskDuration,
      priority,
      completed: false,
    };

    console.log(newTask);
  }

  return (
    <div>
      <h2>Task Form</h2>

      <label htmlFor="title">Task Name</label>
      <br />
      <input
        id="title"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />

      <br />
      <br />

      <label htmlFor="duration">Duration</label>
      <br />
      <select
        id="duration"
        value={duration}
        onChange={handleDurationChange}
      >
        <option value="">Select Duration</option>
        <option value="30 Minutes">30 Minutes</option>
        <option value="1 Hour">1 Hour</option>
        <option value="2 Hours">2 Hours</option>
        <option value="3 Hours">3 Hours</option>
        <option value="Custom">Custom</option>
      </select>

      {duration === "Custom" && (
        <>
          <br />
          <br />

          <label htmlFor="customDurationValue">
            Custom Duration
          </label>
          <br />
          <input
            id="customDurationValue"
            type="number"
            min="1"
            value={customDurationValue}
            onChange={handleCustomDurationValueChange}
          />

          <br />
          <br />

          <label htmlFor="customDurationUnit">Unit</label>
          <br />
          <select
            id="customDurationUnit"
            value={customDurationUnit}
            onChange={handleCustomDurationUnitChange}
          >
            <option value="Minutes">Minutes</option>
            <option value="Hours">Hours</option>
          </select>
        </>
      )}

      <br />
      <br />

      <label htmlFor="priority">Priority</label>
      <br />
      <select
        id="priority"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <br />
      <br />

      <button onClick={handleAddTask}>
        Add Task
      </button>

      <hr />

      <p>Title: {title}</p>
      <p>Duration: {duration}</p>

      {duration === "Custom" && (
        <p>
          Custom Duration: {customDurationValue} {customDurationUnit}
        </p>
      )}

      <p>Priority: {priority}</p>
    </div>
  );
}

export default TaskForm;