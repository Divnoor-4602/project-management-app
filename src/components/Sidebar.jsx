import React, { useState } from "react";
import AddProjectButton from "./AddProjectButton.jsx";
import ProjectView from "./ProjectView.jsx";
import AddProjectModal from "./AddProjectModal.jsx";

export default function Sidebar({
  onSelect,
  onProjectsAdded,
  projectsAdded,
  projectDetails,
  onProjectDetails,
}) {
  return (
    <>
      <aside className="text-white bg-purple-600  h-screen shadow-xl w-96">
        <div className="text-md pt-4 ">
          <span className="ml-2 mr-2 bg-purple-800/50 px-2 py-1 rounded-lg shadow-lg">
            D
          </span>
          <span>Divnoor's workspace</span>
        </div>
        <AddProjectButton
          onProjectAdded={onProjectsAdded}
          onSubmitting={onProjectDetails}
        />
        <div className="mx-3 mt-8 space-y-4">
          {projectsAdded.map((project) => (
            <ProjectView
              onSelect={onSelect}
              key={project.projectName}
              projectProperties={project}
            />
          ))}
        </div>
      </aside>
    </>
  );
}

// todo: render project details on the main content when clicked from the sidebar

// todo: main content should have a project detail component to show all the details
// todo: each component should have a tasks section to furtther sub divide the project management
