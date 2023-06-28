import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const done = () => {
    return todos.filter(todo => todo.done !== true)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const deleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    handleNewTodo: handleNewTodo,
    deleteTodo: deleteTodo,
    onToggleTodo: onToggleTodo,
    done: done(),
  };
};
