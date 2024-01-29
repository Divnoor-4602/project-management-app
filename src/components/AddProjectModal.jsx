import React, { forwardRef, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const AddProjectModal = forwardRef(function AddProjectModal(
  { onProjectAdd, onSubmitting },
  ref
) {
  const [modalProjectDetails, setModalProjectDetails] = useState({
    projectName: "",
    projectDesc: "",
  });

  function handleModalProjectDetails(event) {
    setModalProjectDetails((prevDet) => {
      return { ...prevDet, [event.target.id]: event.target.value };
    });
  }

  const projectName = useRef();
  const projectDescription = useRef();
  return (
    <>
      <dialog
        ref={ref}
        className="w-1/2 rounded-xl shadow-lg py-4 px-4 text-black font-mono"
      >
        <h1 className="text-2xl text-center mt-2 mb-8">Create a project</h1>
        {/* project name */}
        <div className="text-xl my-4">Project name</div>
        <input
          type="text"
          className="rounded-md shadow-sm bg-gray-100 px-4 py-1 focus-visible:outline-blue-500 focus-visible:scale-105 transition-transform"
          placeholder="Enter project name"
          id="projectName"
          onChange={handleModalProjectDetails}
          ref={projectName}
          value={modalProjectDetails.projectName}
        />
        {/* date project added */}
        <div className="text-xl my-4">Description</div>
        <input
          type="text"
          placeholder="Enter project description"
          value={modalProjectDetails.projectDesc}
          className="rounded-md shadow-sm w-10/12 py-1 px-4 bg-gray-100 focus-visible:outline-blue-500 focus-visible:scale-105 transition-transform "
          id="projectDesc"
          onChange={handleModalProjectDetails}
          ref={projectDescription}
        />
        <div className="mt-8 flex w-full justify-evenly pb-4">
          <form method="dialog">
            <button className=" bg-red-600/70 text-white rounded-full hover:scale-105 transition-transform py-1 px-2 shadow-md">
              <CloseIcon className="mr-2 pl-2" />
              Cancel
            </button>
          </form>
          <form method="dialog">
            <button
              className="bg-green-600/70 text-white rounded-full py-1 px-2 hover:scale-105 transition-transform shadow-md"
              onClick={(event) => {
                onSubmitting(event, modalProjectDetails);
                onProjectAdd();
              }}
            >
              <AddIcon className="mr-2 pl-2" />
              Add new project
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
});

export default AddProjectModal;
