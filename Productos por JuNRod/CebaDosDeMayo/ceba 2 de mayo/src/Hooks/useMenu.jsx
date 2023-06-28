import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "../Components/Icon";
import styled from "@emotion/styled";

const Menu = styled.div`
  position: relative !important;
  margin-right: 10px !important;
`;
export const useMenu = (secciones, seccionesMenu) => {
  const ConstructorMenu = () => (
    <Menu>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          {secciones.map((seccion) => (
            <MenuItem key={seccion}>

              <a href={`../${seccion.replaceAll(" ", "")}.html`}>
                <ListItemText>{seccion} </ListItemText>
              </a>
            </MenuItem>
          ))}

          {seccionesMenu.map((seccion) => (
            <MenuItem key={seccion}>
              <ListItemText>
                {seccion} <Icon />{" "}
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Menu>
  );

  return [ConstructorMenu];
};
