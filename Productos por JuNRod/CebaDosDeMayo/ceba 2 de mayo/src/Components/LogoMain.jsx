import styled from "@emotion/styled";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../img/Logo.jpg";
import { Location } from "./Location";
import { Phone } from "./Phone";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: "Lato";
  font-weight: 900;
  padding-bottom: 1.4rem;
  order: 2;
`;

const Logo = styled.img`
  height: 30vw;
  width: 30vw;
  margin: 0 auto;
`;

const P1 = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: white;
  text-shadow: 0.8px 0.3px 2px black;
`;

const P2 = styled.p`
  margin: 0;
  font-size: 2.5rem;
  color: #007500;
`;

const P3 = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: black;
`;

const P4 = styled.p`
  margin: 0;
  font-size: 2.5rem;
  color: black;
`;

const Horario = styled.div`
  margin-top: 1rem;
  align-items: center;
  box-shadow: 0px 0px 0px 2px black;
  border-radius: 1rem;
  padding: .3rem;
`

const P = styled.p`
  margin: 2px;
`

const PTitle = styled.p`
  font-size: 1.6rem;
  margin: 2px;
`

export const LogoMain = () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
      <P1>Centro de Educación Básica Alternativa</P1>
      <P2>Ceba Dos De Mayo</P2>
      <P3>Presencial y Semipresencial</P3>
      <P4>
        <Phone/>
        985 796 354
      </P4>
      <P3><Location /> Gamarrita Chica 186, Callao 07021, Callao, {"Peru"}</P3>

      <Horario>
        <PTitle>Turno Noche</PTitle>
        <P>Lunes a Viernes</P>
        <P>5:45PM A 9:30PM</P>
        <P>ESTUDIA 2 GRADOS EN UN SOLO AÑO</P>
      </Horario>
      <FloatingWhatsApp
        phoneNumber={+51985796354}
        accountName={"2 De Mayo"}
        statusMessage={"Normalmente responde en 1 hora"}
        avatar={logo}
        chatMessage={"¡Hola! 🤝 ¿Cómo podemos ayudarte?"}
        placeholder={"Escribe un mensaje..."}
        darkMode={true}
      />
    </Container>
  );
};
