import styled from "@emotion/styled";

const secciones = [
  "Proceso de matricula",
  "Prueba de Ubicación",
  "FUT Virtual",
  "Preguntas Frecuentes",
  "Galeria de Fotos",
  "Descarga Textos Portafolios",
];

const colors = ["red", "green", "orange", "blue", "pink", "brown"];

const Container = styled.div`
  margin: 1rem 0rem 0rem 1rem;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  @media (max-width: 992px) {
    /* Movil*/
    top: 70vw;
  }
`;

const Block = styled.div`
  padding: 1rem .9rem;
  font-family: "Lato", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;

export const SeccionesColors = () => {
  return (
    <Container>
      {secciones.map((element, index) =>
          <Block key={element} className={colors[index]}>
            <p>{element}</p>
          </Block>
      )}
    </Container>
  );
};
