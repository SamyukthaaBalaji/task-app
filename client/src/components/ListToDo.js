import React, { useEffect, useState } from "react";
import EditToDo from "./EditToDo";

function ListToDo() {
  const [todos, settodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("https://task-app-inje.vercel.app/alltodo");
      const jsondata = await response.json();
      /*  console.log(response); */
      /*  console.log(jsondata); */
      settodos(jsondata);
    } catch (error) {
      console.log(error.message);
    }
    /* console.log(todos); */
  };
  const deletetodo = async (id) => {
    try {
      const deletetodo = await fetch(
        `https://task-app-inje.vercel.app/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      settodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(deletetodo);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>DESCRIPTION </th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditToDo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletetodo(todo.todo_id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListToDo;
