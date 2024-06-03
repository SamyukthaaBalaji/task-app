import React, { useState } from "react";

function EditToDo({ todo }) {
  const [description, setdescription] = useState(todo.description);
  const updatedescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `https://task-app-inje.vercel.app//todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      /* console.log(response); */
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        EDIT
      </button>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">EDIT TO-DO</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                /* onClick={setdescription(todo.description)} */
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></input>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => {
                  updatedescription(e);
                }}
              >
                EDIT
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => updatedescription(e)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditToDo;
