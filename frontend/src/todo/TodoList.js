import Todo from "./Todo";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";

export default function TodoList() {
 const { state, dispatch } = useContext(StateContext);
 const { todos } = state;
 const [error, setError] = useState(false);

 const [todoToggle, toggleTodo] = useResource(({  id, completed, completeDate}) => ({
  url: `/todos/${id}`,
  method: "patch",
  data: {completed, completeDate}
 }));

 const [todoDelete, deleteTodo] = useResource(({ id }) => ({
  url: `todos/${id}`,
  method: "delete"
 }));

 const [updateTodos, getTodos] = useResource(() => ({
  url: "/todos",
  method: "get",
}));

useEffect(getTodos, []);

useEffect(() => {
  if (updateTodos && updateTodos.data) {
    console.log(updateTodos)
    dispatch({ type:"FETCH_TODOS", todos: updateTodos.data.reverse()});
  }
}, [updateTodos]);

useEffect(() => {
  if(todoToggle?.error) {
    setError(true);
  }
  if (todoToggle?.isLoading === false && todoToggle?.data){
    console.log(todoToggle);
    dispatch({
        type: "TOGGLE_TODO",
        completed: todoToggle.data.completed,
        dateCompleted: todoToggle.data.completeDate
    });
    getTodos();
  }
}, [todoToggle]);

useEffect(() => {
  if(todoDelete?.error) {
    setError(true);
  }
  if (todoDelete?.isLoading === false && todoDelete?.data){
    console.log(todoDelete);
    dispatch({
      type: "DELETE_TODO"
    });
    getTodos();
  }
}, [todoDelete]);

 
 return (
  <div>
    {todos.map((todo, index) => (
      <div className="todo">
        <Todo {...todo} key={todo.id} />
        <div className="todo_Action_Container">
        <div className="todo_Checkbox_Container">
          <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            toggleTodo({
              id: todo.id, 
              completed: e.currentTarget.checked, 
              completeDate: e.currentTarget.checked? new Date().toLocaleString() : null})
          }}></input>
          <button className="todo_Delete_Button"
          onClick={(e) => {
            deleteTodo({id: todo.id})
          }}
        >
          Delete Todo
        </button>
       </div>
        </div>
      </div>


    ))}
  </div>
 );
}
