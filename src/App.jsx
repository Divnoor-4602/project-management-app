import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState();
  const [projectsAdded, setProjectsAdded] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    projectDescription: "",
    tasks: [],
    dateCreated: "",
  });

  function handleProjectDetails(event, modalDetails) {
    let projectName = modalDetails.projectName;
    let projectDescription = modalDetails.projectDesc;
    // get current date
    let date = new Date().toDateString();

    setProjectDetails((prevValue) => {
      prevValue.dateCreated = date;
      prevValue.projectName = projectName;
      prevValue.projectDescription = projectDescription;
    });
  }

  function handleSelectedProject(projectProperties) {
    setSelectedProject((prevValue) => projectProperties);
  }

  function handleProjectsAdded() {
    setProjectsAdded((previousProjects) => [
      ...previousProjects,
      { ...projectDetails },
    ]);
    setProjectDetails((prevValue) => {
      return {
        projectName: "",
        projectDescription: "",
        tasks: [],
        dateCreated: "",
      };
    });
  }

  return (
    <>
      <div className="flex font-mono">
        <Sidebar
          onSelect={handleSelectedProject}
          onProjectsAdded={handleProjectsAdded}
          projectsAdded={projectsAdded}
          onProjectDetails={handleProjectDetails}
          projectDetails={projectDetails}
        />
        {selectedProject != undefined ? (
          <MainContent projectToDisplay={selectedProject} />
        ) : (
          <MainContent />
        )}
      </div>
    </>
  );
}

export default App;
