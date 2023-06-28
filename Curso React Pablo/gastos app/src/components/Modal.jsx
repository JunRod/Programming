import { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

export const Modal = ({
  setModal,
  AnimarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setfecha] = useState("")
  const [id, setId] = useState("")

  useEffect(() => {
    const { nombre, cantidad, categoria, fecha, id } = gastoEditar;
    setNombre(nombre);
    setCantidad(cantidad);
    setCategoria(categoria);
    setfecha(fecha);
    setId(id);
  }, [gastoEditar]);

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
      setGastoEditar({});
    }, 500);
  };

  const validar = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria, fecha, id});
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={validar}
        className={`formulario ${AnimarModal ? "animar" : "cerrar"}`}
      >
        <legend>
          {gastoEditar.nombre > 0 ? "Editar Gasto" : "Nuevo Gasto"}
        </legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="text"
            placeholder="Añade la cantidad del gasto: ej.500"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};
