import { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import "./App.css";

import appReducer from "./reducers";

function App() {
  const initialTodos = [
    {
      title: "My first post",
      content: "Some content",
      author: "Paul",
      todoID: uuidv4(),
      dateCreated: new Date().toLocaleString(),
      completed: false,
      dateCompleted: null,
    },
    {
      title: "My second post",
      content: "Some content",
      author: "Paul",
      todoID: uuidv4(),
      dateCreated: new Date().toLocaleString(),
      completed: false,
      dateCompleted: null,
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });

  return (
    <div className="app">
      <header>
        <UserBar user={state.user} dispatch={dispatch} />
      </header>
      <main>
        {state.user && (
          <CreateTodo
            user={state.user}
            todos={state.todos}
            dispatch={dispatch}
          />
        )}
        <div className="todo-list">
          <TodoList todos={state.todos} dispatch={dispatch} />
        </div>
      </main>
    </div>
  );
}

export default App;
