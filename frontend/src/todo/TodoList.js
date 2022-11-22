import { useContext } from "react";

import Todo from "./Todo";
import { StateContext } from "../contexts";

export default function TodoList() {
    const { state } = useContext(StateContext);
    const { todos } = state;
    return (
        <div>
            {todos.length === 0  &&
                <div className = "todo">
                    <h2 className="centered">No posts found.</h2>
                </div>}
            {todos.length > 0 && todos.map((p, i) =>
                    <div className = "todo">
                        <Todo {...p} key={p._id} />
                    </div>
                )}
        </div>
    );
}