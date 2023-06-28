import { useForm } from "../hooks/useForm";
import { Input } from "./Input";

export const FormWithCustomHook = () => {
  const objeto = {
    name: "",
    email: "",
    tel: "",
  };

  const onResetForm = () => {
    setFormState(objeto);
  };

  const { onInputChange, name, email, tel, setFormState } = useForm(objeto);

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <Input funcion={onInputChange} name={"name"} value={name} />
      <Input funcion={onInputChange} name={"email"} value={email} />
      <Input funcion={onInputChange} name={"tel"} value={tel} />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
