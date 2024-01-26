import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function AddProjectButton() {
  return (
    <>
      <button
        className="ml-3 mt-4 px-8 py-1 rounded-md shadow-lg hover:scale-105
         transition duration-150 bg-white text-black hover:bg-gradient-to-r from-violet-600
          to-fuchsia-500  hover:text-white"
      >
        <AddCircleOutlineIcon className="mr-1" />
        <span className="text-sm">Add project</span>
      </button>
    </>
  );
}
