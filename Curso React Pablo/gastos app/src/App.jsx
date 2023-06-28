import { useEffect, useState } from "react";
import { Header } from "../src/components";
import Filtros from "./components/Filtros";
import { ListadoGastos } from "./components/ListadoGastos";
import { Modal } from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : [])
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem("presupuesto")) ?? 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [AnimarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("") 
  const [gastosFiltrados, setGastosFiltrados] = useState()

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto();
    }
  }, [gastoEditar]);

  //El presupuesto del LS se actualiza en función al presupuesto
  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0)
  }, [presupuesto])
  
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
    setGastosFiltrados(gastosFiltrados)
  }, [filtro])
  
  //Se ejecuta una vez, verifica si existe un presupuesto para mostrar la segunda ventana
  useEffect(() => {
    if(presupuesto > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  const guardarGasto = (gasto) => {
    if (gasto.id) {

      const gastoEditado = gastos.map((gastoObject) => gastoObject.id === gasto.id ? gasto : gastoObject);
      
      setGastos(gastoEditado);3
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminar = (id) => {
    const gastosNuevo = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosNuevo)
  }

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  return (
    <div className={modal ? "fijar" : null}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} eliminar={eliminar} gastosFiltrados={gastosFiltrados} filtro={filtro}/>
          </main>

          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal ? (
        <Modal
          gastoEditar={gastoEditar}
          setModal={setModal}
          AnimarModal={AnimarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastos={gastos}
          setGastos={setGastos}
          setGastoEditar={setGastoEditar}
        />
      ) : null}
    </div>
  );
}

export default App;
