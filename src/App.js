import { useState, useReducer } from "react";

import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from "./reducers";

function App() {
    const initialTodos = [
        {
            title: "My first post",
            content: "Some content",
            author: "Paul",
        },
        {
            title: "My second post",
            content: "Some content",
            author: "Paul",
        },
    ];

    const [state, dispatch] = useReducer(appReducer, {
        user: "",
        todos: initialTodos,
    });

    return (
        <div>
            <UserBar user={state.user} dispatch={dispatch} />
            <TodoList todos={state.todos} />
            {state.user && (
                <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />
            )}
        </div>
    );
}

export default App;
