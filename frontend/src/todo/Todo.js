import React from "react";
import { Link, useNavigate, useParams, useLocation,useRoutes } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../contexts";

function Todo({ title, content, author, dateCreated, isComplete, dateCompleted, _id }) {
    const { secondaryColor } = useContext(ThemeContext);
    const navigate = useNavigate();
    console.log("Post rendered");
    return (
        <div className="todo_Content_Container">
            <div className="todo_Title_Container">
                <small>Title</small>
                <h3> {title} </h3>
            </div>
            <div className="todo_Description_Container">
                <small>Content <br></br></small>
                <span> {content} </span>
            </div>
            <div className="todo_Author_Container">
                <small>Written by:<br></br></small> <b>{author.username}</b>
            </div>
            {useLocation().pathname !== '/' && <div className="todo_Details_Container">
                <div className="todo_DateCreated_Container">
                    <small>Date Created:</small> {new Date(dateCreated).toLocaleString()}
                </div>
                <div className="todo_CompleteStatus_Container">
                    <small>Completed:</small> {isComplete ? "True" : "False"}
                </div>
                <div className="todo_DateCompleted_Container">
                    <small>Date Completed:</small>{" "}
                    {dateCompleted ? new Date(dateCompleted).toLocaleString() : "Not Completed"}
                </div>
            </div>}
            {useLocation().pathname === '/' &&
                <button
                    onClick={() => {
                        navigate(`/todo/${_id}`);
                    }}
                >
                    Details
                </button>}
        </div>
    );
}

export default React.memo(Todo);
//export default Post;