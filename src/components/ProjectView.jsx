import React from "react";

export default function ProjectView({ projectProperties, onSelect }) {
  return (
    <>
      <div
        className="active:bg-purple-400 hover:bg-purple-400 rounded-md px-2 py-1 cursor-pointer flex justify-between"
        onClick={() => onSelect({ ...projectProperties })}
      >
        <div>{projectProperties.projectName}</div>
        <div className="text-xs mt-1 opacity-50">
          {projectProperties.dateCreated}
        </div>
      </div>
    </>
  );
}
