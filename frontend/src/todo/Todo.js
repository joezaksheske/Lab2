import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

function Todo({title, content, author}) {
  const { secondaryColor } = useContext(ThemeContext);
  console.log("Post Rendered");
  return (
    <div>
      <h3 style={{ color: secondaryColor}}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  );
}

export default React.memo(Todo);


// export default function Todo({ todo, dispatch }) {
//   return (
//     <div className="todo">
//       <div className="todo_Title_Container">
//         <h3>{todo.title}</h3>
//       </div>
//       <div className="todo_Author_Container">
//         Written by <b>{todo.author}</b>
//       </div>
//       <div className="todo_Description_Container">{todo.content}</div>
//       <div className="todo_DateCreated_Container">
//         Date Created: {todo.dateCreated}
//       </div>
//       <div className="todo_CompleteStatus_Container">
//         Completed: {todo.completed ? "True" : "False"}
//       </div>
//       <div className="todo_DateCompleted_Container">
//         Date Completed:{" "}
//         {todo.dateCompleted ? todo.dateCompleted : "Not Completed"}
//       </div>
//       <div className="todo_Checkbox_Container">
//         <input
//           type="checkbox"
//           onChange={(e) => {
//             dispatch({
//               ...todo,
//               type: "TOGGLE_TODO",
//               completed: e.currentTarget.checked,
//               dateCompleted: e.currentTarget.checked
//                 ? new Date().toLocaleString()
//                 : null,
//             });
//           }}
//         ></input>
//         <button
//            onClick={(e) => {
//              dispatch({type:"DELETE_TODO", ...todo})
//            }}
//          >
//            Delete Todo
//          </button>
//       </div>
//     </div>
//   );
