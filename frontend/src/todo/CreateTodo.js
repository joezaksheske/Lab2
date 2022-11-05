import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateTodo({ user, todos, dispatch }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="todo-list">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "CREATE_TODO",
            todoID: uuidv4(),
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
