import React, { useEffect, useContext, useState } from "react";
import { useResource } from "react-request-hook";
import { useParams, useNavigate } from "react-router-dom";

import { StateContext } from "../contexts";

import Todo from "../todo/Todo";

export default function TodoPage() {
  const { id } = useParams();
  const { state, dispatch } = useContext(StateContext);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const [todoToggle, toggleTodo] = useResource((dateCompleted, isComplete ) => ({
    url: `/todo/${id}`,
    method: "patch",
    headers: { Authorization: `${state.user.access_token}` },
    data: {
      id: `${id}`,
      dateCompleted: dateCompleted,
      isComplete: isComplete,
    }
  }));


  const [todoDelete, deleteTodo] = useResource(() => ({
    url: `/todo/${id}`,
    method: "delete",
    headers: { Authorization: `${state.user.access_token}` },
    data: { id: `${id}` },
  }));

  const [todo, getTodo] = useResource(() => ({
    url: `/todo/${id}`,
    method: "get",
    headers: { Authorization: `${state.user.access_token}` },
  }));

  useEffect(getTodo, [id]);

  useEffect(() => {
    if(todo && todo.isLoading === false && todo.data){
      navigate(`/todo/${todo.data._id}`);
    }
  }, [todo]);

  useEffect(() => {
    if(todoToggle?.error) {
      setError(true);
    }
    if (todoToggle?.isLoading === false && todoToggle?.data){
      getTodo();
    }
  }, [todoToggle]);

  useEffect(() => {
    if(todoDelete?.error) {
      setError(true);
    }
    if (todoDelete?.isLoading === false && todoDelete?.data){
      navigate("/");
    }
  }, [todoDelete]);
  return (
    <div>
      {error && <span style={{color: "red"}}> There was an issue modifying your Todo</span>}
      {todo && todo.data ?
          <div className = "todo">
            <Todo {...todo.data} />
            <div className="todo_Action_Container">
              <div className="todo_Checkbox_Container">
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => {
                      toggleTodo({
                        isComplete: e.currentTarget.checked,
                        dateCompleted: e.currentTarget.checked? new Date().toLocaleString() : null})
                    }}></input>
                <button className="todo_Delete_Button"
                        onClick={(e) => {
                          deleteTodo({id: todo.id})
                        }}
                >
                  Delete Todo
                </button>
                <button
                    onClick={() => {
                      navigate(`/`);
                    }}
                >
                  Back to Todo List
                </button>
              </div>
            </div>
          </div> : "Loading..."}
    </div>
  );
}