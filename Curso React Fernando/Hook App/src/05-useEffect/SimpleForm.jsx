import { useState } from "react";
import { Input } from "./Input";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const {name, email, tel} = formState

  const onInputChange = ({ target : {name, value}}) => {
    setFormState({
      ...formState,
      [name]: value,
    });

  };

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <Input funcion={onInputChange} name={"name"} value={name}/>
      <Input funcion={onInputChange} name={"email"} value={email}/>
      <Input funcion={onInputChange} name={"tel"} value={tel}/>
      {
        (name === "junior") && <Message/>
      }
    </>
  );
};
