import { useState, useReducer } from "react";

import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from "./reducers";

function App() {
  const initialPosts = [
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

  // Don't manage global state like this in a real app
  // const [globalState, updateGlobalState] = useState({
  //   user: "",
  //   posts: [],
  //   comments: []
  // })
  // updateGlobalState({ ...globalState, user: "Paul" })

  //const [user, setUser] = useState("");

  //const [user, dispatchUser] = useReducer(userReducer, "");

  //const [posts, setPosts] = useState(initialPosts);
  //const [posts, dispatchPosts] = useReducer(postReducer, initialPosts);

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  return (
      <div>
        <UserBar user={state.user} dispatch={dispatch} />
        <TodoList todos={state.todos} />
        {state.user && (
            <CreateTodo user={state.user} posts={state.todos} dispatch={dispatch} />
        )}
      </div>
  );
}

export default App;