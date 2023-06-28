import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef.current.select())
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input type="text" placeholder="Ingrese su nombre" ref={inputRef} />
      <button onClick={onClick} className="btn btn-success">Button</button>
    </>
  );
};
