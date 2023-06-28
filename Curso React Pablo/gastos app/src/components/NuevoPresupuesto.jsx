import { useState } from "react";
import { Mensaje } from "./Mensaje";

export const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedo-presupuesto contenedor sombra">
      <form onSubmit={(e) => handlePresupuesto(e)} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            value={presupuesto}
            type="number"
            onChange={(e) => setPresupuesto(Number(e.target.value))}
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje>{mensaje}</Mensaje>}
      </form>
    </div>
  );
};
