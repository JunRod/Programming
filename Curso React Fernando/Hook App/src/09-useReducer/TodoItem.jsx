export const TodoItem = ({ todo = [], deleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => onToggleTodo(todo.id)}
        className={`non-selectable aling-self-center ${
          todo.done ? "text-decoration-line-through" : " "
        }`}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
