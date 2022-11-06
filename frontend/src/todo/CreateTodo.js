import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [todo, createTodo] = useResource(({ title, content, author, dateCreated, completed, completeDate }) => ({
    url: "/todos",
    method: "post",
    data: { title, content, author, dateCreated, completed, completeDate}
  }));

  useEffect(() => {
    if (todo?.error) {
      setError(true);
    }
    if (todo?.isLoading === false && todo?.data) {
      dispatch({
        type: "CREATE_TODO",
        id: todo.data.id,
        title: todo.data.title,
        content: todo.data.content,
        author: todo.data.author,
        dateCreated: todo.data.dateCreated,
        completed: todo.data.completed,
        completeDate: todo.data.completeDate,
      })
    }
  }, [todo]);

  return (
    <div className="todo-list">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo({
            title, 
            content, 
            author: user, 
            dateCreated: new Date().toLocaleString(),
            completed: false,
            completeDate: null,
          });
        }}
      >
        <div className="form_CreateTodo">
          <div className="form_CreateTodoHeader">
            What do you need to get done?
          </div>
          <div className="form_CreateTodoAuthor">
            Author: <b>{user}</b>
          </div>
          <div className="form_CreateTodoTitle">
            <label htmlFor="create-title">Title:</label>
            <input
              className="form_CreateTodoTitle_Input"
              type="text"
              name="create-title"
              id="create-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <textarea
            className="form_CreateTodoDescription"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <div className="form_CreateTodoSubmit">
            <input type="submit" value="Create" disabled={title.length === 0} />
          </div>
        </div>
      </form>
    </div>
  );
}
