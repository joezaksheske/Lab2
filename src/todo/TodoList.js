import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch }) {
  return (
    <div>
      {console.log(todos)}
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.todoID} dispatch={dispatch} />
      ))}
    </div>
  );
}
