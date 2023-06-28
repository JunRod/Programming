import styled from "@emotion/styled";
import { Nav } from "./Components/Nav";

const Contenedor = styled.div`
  max-width: 900vw;
  margin: 0 auto;
  width: 85%;
`;

const Main = styled.main`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

function App() {
  return (
    <Contenedor>
      <Nav />
      <Main>
        <H1>Ventajas</H1>
      </Main>
    </Contenedor>
  );
}

export default App;
