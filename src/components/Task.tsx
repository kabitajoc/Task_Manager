// src/Task.tsx
import React, { useState } from "react";

interface TaskProps {
  task: string;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className=" bg-slate-800 w-52 m-2 p-1 rounded-md">
      <p className=" flex  gap-1">
        <span className="  rounded-full w-5 p-0.5 flex bg-red-700"></span>
        <span className="  rounded-full  w-5 p-0.5 flex bg-green-700"></span>
        <span className="  rounded-full  w-5 p-0.5 flex bg-pink-700"></span>
      </p>
      <p className="">{task}</p>
    </div>
  );
};

export default Task;
