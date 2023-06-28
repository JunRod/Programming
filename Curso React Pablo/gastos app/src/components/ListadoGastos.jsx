import { Gasto } from "./Gasto";

export const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminar,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">

      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay Gastos en esta categoria"}</h2>

          {gastosFiltrados.map((gasto) => (
            <Gasto
            gasto={gasto}
            key={gasto.id}
            setGastoEditar={setGastoEditar}
            eliminar={eliminar}
          />))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay Gastos aún"}</h2>

          {gastos.map((gasto) => (
            <Gasto
            gasto={gasto}
            key={gasto.id}
            setGastoEditar={setGastoEditar}
            eliminar={eliminar}
          />))}
          
        </>
      )}
    </div>
  );
};
