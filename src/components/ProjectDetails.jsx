import React, { useRef } from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AddTaskSharpIcon from "@mui/icons-material/AddTaskSharp";
import TaskAddModal from "./TaskAddModal.jsx";

export default function ProjectDetails({ projectToShow }) {
  const taskModal = useRef();

  function handleTaskModalShow() {
    taskModal.current.showModal();
  }

  function addTasksToCurrentProject(taskName) {
    projectToShow.projectToDisplay.tasks.push(taskName);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between mr-40">
          <h1 className="text-4xl">
            {projectToShow.projectToDisplay.projectName}
          </h1>
          <button>
            <DeleteSharpIcon />
            Delete
          </button>
        </div>

        <p className="opacity-50">
          {projectToShow.projectToDisplay.dateCreated}
        </p>
        <p className="text-lg mt-4">
          {projectToShow.projectToDisplay.projectDescription}
        </p>
        <input
          type="text"
          placeholder="Add description"
          className="mt-2 p-2 w-4/5 bg-gray-300/50 rounded-md focus-visible:outline-blue-500 focus-visible:scale-105 focus-visible:shadow-lg transition"
        />
        {/* task bar */}
        <div className="mt-4">
          <button
            onClick={handleTaskModalShow}
            className="hover:bg-green-500 hover:text-white shadow-md rounded-lg px-4 py-2 bg-white text-black hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <AddTaskSharpIcon className="mr-2 " />
            <span>Add a new task</span>
          </button>
        </div>
        <div className="text-xl mt-8 fw-bold">Related tasks</div>
        {projectToShow.projectToDisplay.tasks.map((task) => (
          <p>{task}</p>
        ))}
        <TaskAddModal ref={taskModal} onTaskAdd={addTasksToCurrentProject} />
      </div>
    </>
  );
}
