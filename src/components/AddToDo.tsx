// src/App.tsx
import React, { useState, useEffect } from "react";
import Task from "./Task";

const AddToDo: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");



  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className=" border rounded-md bg-black text-white w-56">
      <h1>Todo List</h1>
      <div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
        <input
          className=" bg-black outline-none p-2"
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
};

export default AddToDo;
