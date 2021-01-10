const initialState = {
    todos: [],
  }
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "Add-Todo":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        }
      case "Toggle-Todo":
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
          ),
        }
      case "Edit-Todo" :
        return {
          todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo
        ),
         
        }

      default:
        return state;
    }
  }
  
  export default Reducer;