import { useState } from "react";
import styled from "@emotion/styled";
import Logo from "../img/Logo.jpg";
import Hamburger from "hamburger-react";
import { Navegacion } from "./Navegacion";

const NavPage = styled.nav`
  top: 0;
  background-color: white;
  position: fixed;
  max-width: 900vw;
  width: 85%;
  height: 50px;
  padding: 1rem ;
  display: flex;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  z-index: 10;
`;

const Izquierda = styled.div`
  cursor: pointer;
`;

const LogoCeba = styled.img`
  height: 100%;
`;

const ContainerLetras = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  padding: 0.2rem 0.2rem;
`;
const TitleLogo = styled.p`
  position: block;
  font-size: 20px;
  display: inline;
  font-weight: 900;
  margin: 0;
  color: #007500;
`;

const SubTitle = styled.p`
  display: block;
  margin: 0;
  font-weight: 700;
`;

const ContenedorHamburguesa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  @media (min-width: 992px) {
    //Desktop
    display: none;
  }
`;

const Desktop = styled.div`
  @media (max-width: 992px) {
    /* Movil */
    display: none;
  }
`;

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavPage>
      <Izquierda>
        <a href="../index.html">
          <LogoCeba src={Logo} alt="Logo"/>
        </a>

        <ContainerLetras>
          <TitleLogo>CEBA 2 DE MAYO - Chucuito Callao</TitleLogo>
          <SubTitle>Presencial - Semipresencial</SubTitle>
        </ContainerLetras>
      </Izquierda>

      <div>
        <ContenedorHamburguesa>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </ContenedorHamburguesa>

        <Desktop>
          <Navegacion />
        </Desktop>

        {isOpen && <Navegacion />}
      </div>
    </NavPage>
  );
};
