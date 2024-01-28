import React, { useRef } from "react";
import { createPortal } from "react-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddProjectModal from "./AddProjectModal.jsx";

export default function AddProjectButton({ onProjectAdded, onSubmitting }) {
  const dialog = useRef();

  function handleDialogShow() {
    dialog.current.showModal();
  }

  return (
    <>
      {createPortal(
        <AddProjectModal
          ref={dialog}
          onProjectAdd={onProjectAdded}
          onSubmitting={onSubmitting}
        />,
        document.getElementById("modal-root")
      )}

      <button
        onClick={handleDialogShow}
        className="ml-12 mt-4 px-8 py-1 rounded-md shadow-lg hover:scale-105
         transition duration-150 bg-white text-black hover:bg-gradient-to-r from-violet-600
          to-fuchsia-500  hover:text-white"
      >
        <AddCircleOutlineIcon className="mr-1" />
        <span className="text-sm">Add project</span>
      </button>
    </>
  );
}
