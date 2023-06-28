import { useState } from "react";
import { useMenu } from "../Hooks/useMenu";
import styled from "@emotion/styled";
import { Icon } from "./Icon";

const EnlaceNav = styled.a`
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;
  @media (max-width: 992px) {
    width: 290px;
    padding: 0px 15px;
    border-radius: 0.3rem;
    background-color: white;
    flex-direction: column;
    box-shadow: 0px 2.3px 3px -2px black;
    gap: 0px;
    padding-bottom: 12px;
  }
`;

const DivMenuNosotros = styled.div`
  @media (min-width: 992px) {
    //Desktop
    position: relative !important;
    margin-left: -23vh !important;
  }
`;

const DivMenuAtención = styled.div`
  @media (min-width: 992px) {
    //Desktop
    position: relative !important;
    margin-left: 17vh !important;
  }
`;

const Movil = styled.div`
  @media (min-width: 992px) {
    //Desktop
    display: none;
  }
`;

const Desktop = styled.div`
  @media (max-width: 992px) {
    //Movil
    display: none;
  }
`;

const [SubMenuNosotros] = useMenu(
  ["Identidad", "Ventajas", "Turnos y Horarios"],
  []
);
const [SubMenuPerifericos] = useMenu(
  ["Callao", "Callao", "Callao"],
  []
);
const [SubMenuAtencion] = useMenu(["Presencial"], ["SemiPresencial"]);

export const Navegacion = () => {
  const [subMenuNosotros, setsubMenuNosotros] = useState(false);
  const [subMenuPerifericos, setsubMenuPerifericos] = useState(false);
  const [subMenuAtencion, setsubMenuAtencion] = useState(false);

  const CerrarAbrirMenus = (subMenuSet, subMenu) => {
    const menusSet = [
      setsubMenuNosotros,
      setsubMenuPerifericos,
      setsubMenuAtencion,
    ];

    let bandera = false;
    //Se filtra la funcion set de la seccion que se apretó
    const filtrado = menusSet.filter((menu) => menu === subMenuSet)[0];
    //Se verifica si la funcion es true (Si es true entonces está abierta la seccion)
    filtrado((filtradoFunction) => (bandera = filtradoFunction));

    if (bandera) {
      filtrado((filtradoFunction) => !filtradoFunction);
      return;
    } else {
      menusSet.map((menuSet) => menuSet(menuSet && !menuSet));
    }

    //Para cerrar un true, debe verificar si está true, para darle false y cortar el proceso.
    subMenuSet(!subMenu);
  };

  return (
    <>
      <EnlaceNav>
        <p> <a href="../index.html">Inicio</a> </p>
        <p
          onClick={() => CerrarAbrirMenus(setsubMenuNosotros, subMenuNosotros)}
        >
          Nosotros {<Icon bandera={subMenuNosotros ? false : true} />}
        </p>
        <Movil>
          {subMenuNosotros && (
            <DivMenuNosotros>
              <SubMenuNosotros />
            </DivMenuNosotros>
          )}
        </Movil>

        <p
          onClick={() =>
            CerrarAbrirMenus(setsubMenuPerifericos, subMenuPerifericos)
          }
        >
          C. Periféricos {<Icon bandera={subMenuPerifericos ? false : true} />}
        </p>

        <Movil>{subMenuPerifericos && <SubMenuPerifericos />}</Movil>

        <p
          onClick={() => CerrarAbrirMenus(setsubMenuAtencion, subMenuAtencion)}
        >
          F. Atención{<Icon bandera={subMenuAtencion ? false : true} />}
        </p>

        <Movil>
          {subMenuAtencion && (
            <DivMenuAtención>
              <SubMenuAtencion />
            </DivMenuAtención>
          )}
        </Movil>
      </EnlaceNav>
      <Desktop>
        {subMenuNosotros && (
          <DivMenuNosotros>
            <SubMenuNosotros />
          </DivMenuNosotros>
        )}
        {subMenuPerifericos && <SubMenuPerifericos />}

        {subMenuAtencion && (
          <DivMenuAtención>
            <SubMenuAtencion />
          </DivMenuAtención>
        )}
      </Desktop>
    </>
  );
};
