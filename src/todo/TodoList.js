import Todo from "./Todo";

export default function TodoList({ todos = [] }) {
    console.log(todos);
    return (
        <div>
            {todos.map((p, i) => (
                <Todo {...p} key={"todo-" + i} />
            ))}
        </div>
    );
}
