import React, { useState } from "react";
import notebookIll from "../assets/notebook.svg";
import ProjectDetails from "./ProjectDetails.jsx";
import layeredSideBg from "../assets/layered-waves.svg";

export default function MainContent({ ...projectToShow }) {
  return (
    <>
      {Object.keys(projectToShow).length === 0 ? (
        <>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <img
              src={notebookIll}
              alt="no content image"
              className="w-80 h-80"
            />
            <h1 className="text-2xl">Add / Choose a project</h1>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col mt-8 ml-20 w-full">
            <ProjectDetails projectToShow={projectToShow} />
          </div>
        </>
      )}
    </>
  );
}
