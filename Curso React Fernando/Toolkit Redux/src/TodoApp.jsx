import { useState } from "react";
import { useGetTodoQuery } from "./api/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const prevTodo = () => {
    if(todoId === 1) return
    setTodoId(todoId - 1)
  }

  return (
    <>
      <div>Todos - RTK Query</div>
      <hr />
      <h4>isLoading: {isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={() => prevTodo() }>
        Prev Todo
      </button>
      <button onClick={() => nextTodo() }>
        Next Todo
      </button>
    </>
  );
};
