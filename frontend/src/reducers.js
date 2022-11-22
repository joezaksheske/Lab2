function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        username: action.username,
        access_token: action.access_token,
      };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        id: action.id,
        title: action.title,
        content: action.content,
        author: action.author,
        dateCreated: action.dateCreated,
        completed: action.completed,
        dateCompleted: action.dateCompleted,
      };
      return [newTodo, ...state];
    case "TOGGLE_TODO":
      return state.map((todo, i) => {
        if (todo.todoID === action.todoID) {
          return action;
        } else return todo;
      });
    case "DELETE_TODO":
      return state.filter(e => e.todoID !== action.todoID);
    case "FETCH_TODOS":
      return action.todos;
    case "CLEAR_TODOS":
      return [];
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
