import React from "react";
import AddProjectButton from "./AddProjectButton.jsx";
import ProjectView from "./ProjectView.jsx";

export default function Sidebar() {
  return (
    <>
      <aside className="text-white bg-purple-600 w-1/3 max-w-72 h-screen shadow-xl">
        <div className="text-md pt-4">
          <span className="ml-2 mr-2 bg-purple-800/50 px-2 py-1 rounded-lg shadow-lg">
            D
          </span>
          Divnoor's workspace
        </div>
        <AddProjectButton />
        <div className="mx-3 mt-8 space-y-4">
          <ProjectView />
          <ProjectView />
          <ProjectView />
        </div>
      </aside>
    </>
  );
}
