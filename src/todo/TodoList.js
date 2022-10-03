import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch }) {
    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.todoID} dispatch={dispatch}/>
            ))}
        </div>
    //     <div>
    //     {posts.map((p, i) => (
    //     //   <Post {...p} key={"post-" + i} />
    //       <Post {...p} key={p.id} />
    //     ))}
    //   </div>
    );
}

