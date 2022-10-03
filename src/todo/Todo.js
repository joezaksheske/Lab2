import { useState
 } from "react";
export default function Todo({todo, dispatch}) {
    return (
        <div className="todo">
            {console.log(todo)}
            <div className="todo_Title_Container">
                <h3>{todo.title}</h3>
            </div>
            <div className="todo_Author_Container">
                Written by <b>{todo.author}</b>
            </div>
            <div className="todo_Description_Container">{todo.content}</div>
            <div className="todo_DateCreated_Container">Date Created: {todo.dateCreated}</div>
            <div className="todo_CompleteStatus_Container">Completed: {todo.completed ? 'True':'False'}</div>
            <div className="todo_DateCompleted_Container">Date Completed: {todo.dateCompleted? todo.dateCompleted:'Not Completed'}</div>
            <div className="todo_Checkbox_Container">
                <input type="checkbox" onChange={
                    (e) =>{
                        dispatch({
                            ...todo,
                            type:"UPDATE_TODO",
                            completed: e.currentTarget.checked,
                            dateCompleted: e.currentTarget.checked? new Date().toLocaleString():null
                        })
                    }
                }></input>
            </div>
        </div>
    );
}
