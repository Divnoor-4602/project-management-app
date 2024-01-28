import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState();

  function handleSelectedProject(projectProperties) {
    setSelectedProject((prevValue) => projectProperties);
  }

  return (
    <>
      <div className="flex font-mono">
        <Sidebar onSelect={handleSelectedProject} />
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
