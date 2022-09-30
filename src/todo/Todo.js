export default function Todo({ title, content, author, dateCreated, completed,dateCompleted}) {
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
            <div className="todo_CompleteStatus_Container">Completed: {completed ? 'True':'False'}</div>
            <div className="todo_DateCompleted_Container">Date Completed: {dateCompleted ? dateCompleted:'Not Completed'}</div>
            <div className="todo_Checkbox_Container">
                <input type="checkbox"></input>
            </div>

        </div>
    );
}
