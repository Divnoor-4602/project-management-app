import React from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export default function ProjectDetails({ projectToShow }) {
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
        <div>Task bar</div>
      </div>
    </>
  );
}
