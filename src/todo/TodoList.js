import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch }) {
  if (todos.length === 0)
    {return (<div>No Todos here</div>)}
  else
    {return (
      <div>
        {console.log(todos)}
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.todoID} dispatch={dispatch} />
        ))}
      </div>
  );}
}
