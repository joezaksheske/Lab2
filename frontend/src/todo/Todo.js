import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, StateContext } from "../contexts";


function Todo({title, content, author, dateCreated, completed, completeDate }) {
  const { secondaryColor } = useContext(ThemeContext);
  const { state, dispatch } = useContext(StateContext);
  const { todos } = state;
  console.log("Todo Rendered");
  return (
    <div className="todo">
    <div className="todo_Title_Container">
      <h3>{title}</h3>
    </div>
    <div className="todo_Author_Container">
      Written by <b>{author}</b>
    </div>
    <div className="todo_Description_Container">{content}</div>
    <div className="todo_DateCreated_Container">
      Date Created: {dateCreated}
    </div>
    <div className="todo_CompleteStatus_Container">
      Completed: {completed ? "True" : "False"}
    </div>
    <div className="todo_DateCompleted_Container">
      Date Completed:{" "}
      {completeDate ? completeDate : "Not Completed"}
    </div>
  </div>
  );
}

export default React.memo(Todo);