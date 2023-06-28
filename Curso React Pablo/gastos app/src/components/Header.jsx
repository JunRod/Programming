import { NuevoPresupuesto } from "./NuevoPresupuesto";
import { ControlPresupuesto } from "./ControlPresupuesto";

export const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
  isValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Panificador de Gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} setIsValidPresupuesto={setIsValidPresupuesto} setPresupuesto={setPresupuesto}/>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};
