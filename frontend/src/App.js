import React, { useState, useReducer, useEffect } from "react";
import { useResource } from "react-request-hook";

import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from "./reducers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

import {ThemeContext, StateContext} from "./contexts";

import "./App.css";
// import Header from "./Header";
// import ChangeTheme from "./ChangeTheme";
// import UserBar from "./user/UserBar";

// import appReducer from "./reducers";



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
  }, [user])

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",  
  })

  const [todos, getTodos] = useResource(() => ({
    url: "/todo",
    method: "get",
  }));

  useEffect(getTodos, []);

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }} >
        <ThemeContext.Provider value={ theme }>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Layout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/todo" element={<Layout />}>
              <Route path="/todo/create" element={ <CreateTodo />} />
              <Route path="/todo/:id" element={<TodoPage />} />
            </Route>
          </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;