export default function Todo({ title, content, author, dateCreated, complete,dateCompleted}) {
    return (
        <div className="todo">
            <div className="todo_Title_Container">
                <h3>{title}</h3>
            </div>
            <div className="todo_Author_Container">
                Written by <b>{author}</b>
            </div>
            <div className="todo_Description_Container">{content}</div>
            <div className="todo_DateCreated_Container">Date Created: {dateCreated}</div>
            <div className="todo_CompleteStatus_Container">complete: {complete}</div>
            <div className="todo_DateCompleted_Container">Date Completed: {dateCompleted}</div>
            <div className="todo_Checkbox_Container">
                <input type="checkbox"></input>
            </div>

        </div>
    );
}
