import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../contexts";

function Todo({ title, content, author, _id }) {
    const { secondaryColor } = useContext(ThemeContext);
    console.log("Post rendered");
    return (
        <div>
            <Link to={`/todo/${_id}`}>
                <h3 style={{ color: "black" }}>{title}</h3>
            </Link>

            <div>{content}</div>
            <br />
            <i>
                Written by <b>{author}</b>
            </i>
        </div>
    );
}

export default React.memo(Todo);
//export default Post;