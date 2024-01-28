import React, { forwardRef, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const TaskAddModal = forwardRef(function TaskAddModal({ props }, ref) {
  return (
    <dialog ref={ref} className="rounded-xl flex flex-col gap-8">
      <h1 className="text-2xl text-center">New Task</h1>
      <label>
        Task name
        <input type="text" required id="task-name" />
      </label>

      <div className=" flex w-full justify-evenly pb-4">
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
            Add task
          </button>
        </form>
      </div>
    </dialog>
  );
});

export default TaskAddModal;
