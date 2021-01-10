export const addTodo = (newTodo) => {
    return {
      type: "Add-Todo",
      payload: {
        id: Math.random(),
        description: newTodo,
        isDone: false,
      }
    }
  }
  export const toggleTodo = (id) => {
    return {
      type: "Toggle-Todo",
      payload: id,
    }
  }
  export const editTodo = (id, newDesc) => {
    return {
      type: "Edit-Todo",
      payload: {
        id,
        description : newDesc,
      }
    }
  }
  export const filterTask = (str) => ({
    type: 'FILTER_TASKS',
    payload: str,
  });
 