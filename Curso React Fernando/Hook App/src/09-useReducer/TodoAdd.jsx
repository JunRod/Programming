import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const input = useRef();
  const { description, onInputChange } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    input.current.select();

    if (description.length === "") return;

    const todo = {
      id: new Date().getTime() * 3,
      description,
      done: false,
    };

    handleNewTodo(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={input}
        value={description}
        onChange={onInputChange}
        name="description"
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Agregar
      </button>
    </form>
  );
};
