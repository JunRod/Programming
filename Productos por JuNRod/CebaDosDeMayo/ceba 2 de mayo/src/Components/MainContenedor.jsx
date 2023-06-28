import styled from "@emotion/styled";
import { Gallery } from "./Gallery";
import { LogoMain } from "./LogoMain";

const GalleryStyle = styled.div`
  @media (max-width: 992px) {
    /* Desktop */
    position: absolute;
    height: 80vw;
    width: 80vw;
    z-index: -10;
    order: 1;
  }
`;

const ContenedorMain = styled.div`
  /* Desktop */
  margin-top: 5rem;
  box-shadow: 0rem -2px black;
  @media (min-width: 992px) {
    /* Movil*/
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    padding-bottom: 2rem;
  }
`;

export const MainContenedor = () => {
  return (
    <ContenedorMain>
      <LogoMain />
      <GalleryStyle>
        <Gallery />
      </GalleryStyle>
    </ContenedorMain>
  );
};
