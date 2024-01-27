import React, { useState } from "react";
import AddProjectButton from "./AddProjectButton.jsx";
import ProjectView from "./ProjectView.jsx";

export default function Sidebar() {
  const [projectsAdded, setProjectsAdded] = useState([]);

  function handleProjectsAdded() {
    setProjectsAdded((previousProjects) => [
      ...previousProjects,
      "New Project",
    ]);
  }

  return (
    <>
      <aside className="text-white bg-purple-600 pr-4 md:pr-12 h-screen shadow-xl">
        <div className="text-md pt-4">
          <span className="ml-2 mr-2 bg-purple-800/50 px-2 py-1 rounded-lg shadow-lg">
            D
          </span>
          Divnoor's workspace
        </div>
        <AddProjectButton onProjectAdded={handleProjectsAdded} />
        <div className="mx-3 mt-8 space-y-4">
          {projectsAdded.map((project) => {
            return <ProjectView projectName={project} />;
          })}
        </div>
      </aside>
    </>
  );
}

// todo: Make a dialog modal pop up when the new project button is clicked to get the details of the project through a modal form
// todo: make the projects a js object to use to display all the information required
// todo: main content should have a project detail component to show all the details
// todo: each component should have a tasks section to furtther sub divide the project management
