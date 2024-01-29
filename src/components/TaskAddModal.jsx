import React, { forwardRef, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const TaskAddModal = forwardRef(function TaskAddModal({ onTaskAdd }, ref) {
  const taskName = useRef();

  return (
    <>
      <dialog ref={ref} className="w-1/3 h-1/3 rounded-lg">
        <div className="flex flex-col pt-8 px-8">
          <h1 className="text-2xl text-center mt-4">New Task</h1>
          <label className="mt-4">Task name</label>
          <input
            type="text"
            required
            id="task-name"
            placeholder="Task name"
            ref={taskName}
            className="my-4 w-4/5 px-2 py-1 bg-gray-300/50 rounded-lg focus-visible:shadow-lg transition-shadow"
          />
          <div className=" flex w-full justify-evenly gap-4">
            <form method="dialog">
              <button className=" bg-red-600/70 text-white rounded-full hover:scale-105 transition-transform py-1 px-2 shadow-md">
                <CloseIcon className="mr-2 pl-2" />
                Cancel
              </button>
            </form>
            <form method="dialog">
              <button
                className="bg-green-600/70 text-white rounded-full py-1 px-2 hover:scale-105 transition-transform shadow-md"
                onClick={() => onTaskAdd(taskName.current.value)}
              >
                <AddIcon className="mr-2 pl-2" />
                Add task
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
});

export default TaskAddModal;
