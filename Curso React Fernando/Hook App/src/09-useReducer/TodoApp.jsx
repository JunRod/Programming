import { TodoAdd, TodoList, useTodo } from "./";

export const TodoApp = () => {
  const { deleteTodo, handleNewTodo, onToggleTodo, todos, done } = useTodo();

  return (
    <>
      <h1>
        Tareas: {todos.length} | <small>Pendientes: {done.length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
