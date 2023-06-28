import { TodoItem } from "./";

export const TodoList = ({ todos = [], deleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  );
};
