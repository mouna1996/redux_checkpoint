import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="New Todo"
          value={newTodo}
          onChange={handleChange}
        />
        <Fab color="primary" onClick={handleSubmit}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};
export default AddTodo;
