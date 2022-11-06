import React, { useState, useReducer, useEffect } from "react";
import { useResource } from "react-request-hook";
import { v4 as uuidv4 } from "uuid";

import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import "./App.css";
import Header from "./Header";
import ChangeTheme from "./ChangeTheme";


import appReducer from "./reducers";

import {ThemeContext, StateContext} from "./contexts";

function App() {
  const initialTodos = [];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });

  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user}'s Todo`; 
    } else {
      document.title = "Todo";
    }
  })

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",  
  })

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type:"FETCH_TODOS", todos: todos.data.reverse()});
    }
  }, [todos]);

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch}}>
        <ThemeContext.Provider value={theme}>
          <Header title="Todo"/>
          <ChangeTheme theme={theme} setTheme={setTheme}/>
          <React.Suspense fallback={"Loading..."}>
            <UserBar/>
          </React.Suspense>
          <TodoList />
          {state.user && <CreateTodo />}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;