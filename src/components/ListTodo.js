import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { editTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import EditTodo from "./EditTodo";
import Button from "@material-ui/core/Button";

const ListTodo = () => {
  const dispatch = useDispatch();
  let todoList = useSelector((state) => state.todos);

  const [filt, setFilt] = useState("All");

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const [newDesc, setNewDesc] = useState("");
  const handleChangeDesc = (e) => {
    setNewDesc(e.target.value);
  };

  if (filt === "Done") {
    todoList = todoList.filter((el) => el.isDone === true);
  } else if (filt === "Not done") {
    todoList = todoList.filter((el) => el.isDone === false);
  } else {
    todoList = todoList;
  }

  return (
    <div className="container">
      <select onChange={(e) => setFilt(e.target.value)}>
        <option>All</option>
        <option>Not done</option>
        <option>Done</option>
      </select>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <ul className="todo-ul">
            <li
              style={{ textDecoration: todo.isDone ? "line-through" : "none"}}
            >
              {todo.description}
            </li>

            <div>
              <Button
                variant="outlined"
                size="small"
                color="red"
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                Done
              </Button>

              <EditTodo
                handleEdit={() => {
                  dispatch(editTodo(todo.id, newDesc));
                }}
                handleChangeDesc={handleChangeDesc}
                newDesc={newDesc}
              />
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ListTodo;
