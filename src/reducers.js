function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        todoID: action.todoID,
        title: action.title,
        content: action.content,
        author: action.author,
        dateCreated: action.dateCreated,
        completed: action.completed,
        dateCompleted: action.dateCompleted,
      };
      return [newTodo, ...state];
    case "UPDATE_TODO":
      return state.map((todo, i) => {
        if (todo.todoID === action.todoID) {
          return action;
        } else return todo;
      });
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
  };
}
