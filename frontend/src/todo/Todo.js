import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, StateContext } from "../contexts";


function Todo({title, content, author, dateCreated, completed, completeDate }) {
  const { secondaryColor } = useContext(ThemeContext);
  const { state, dispatch } = useContext(StateContext);
  const { todos } = state;
  return (
    <div className="todo_Content_Container">
      <div className="todo_Title_Container">
        <small>Title</small>
        <h3>{title}</h3>
      </div> 
      <div className="todo_Description_Container">
        <small>Content <br></br></small>
        <span>
          {content}
        </span>
        </div>
      <div className="todo_Author_Container">
        <small>Written by:<br></br></small> <b>{author}</b>
      </div>
      <div className="todo_Details_Container">
        <div className="todo_DateCreated_Container">
          <small>Date Created:</small> {dateCreated}
        </div>
        <div className="todo_CompleteStatus_Container">
          <small>Completed:</small> {completed ? "True" : "False"}
        </div>
        <div className="todo_DateCompleted_Container">
          <small>Date Completed:</small>{" "}
          {completeDate ? completeDate : "Not Completed"}
        </div>
      </div>
  </div>
  );
}

export default React.memo(Todo);