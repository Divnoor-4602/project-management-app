import React from "react";

export default function ProjectView({ projectName }) {
  console.log(projectName);
  return (
    <>
      <div className="active:bg-purple-400 hover:bg-purple-400 rounded-md px-2 py-1 cursor-pointer">
        {projectName}
      </div>
    </>
  );
}
