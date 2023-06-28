import styled from "@emotion/styled";
import { MainContenedor } from "./Components/MainContenedor";
import { Nav } from "./Components/Nav";
import { SeccionesColors } from "./Components/SeccionesColors";
import { UltimasPublicaciones } from "./Components/UltimasPublicaciones";

const Contenedor = styled.div`
  max-width: 900vw;
  margin: 0 auto;
  width: 85%;
`;

const General = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <>
      <General>
        <Contenedor>
          <Nav />
          <MainContenedor />
        </Contenedor>
        <SeccionesColors />
        <UltimasPublicaciones />
      </General>
    </>
  );
}

export default App;
