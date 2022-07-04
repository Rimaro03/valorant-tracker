import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/AppBar/AppbarStyled";

export const DesktopBar = ({ matches }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>TRaCKER</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="tracker" />
        <ListItemText primary="utilities" />
        <ListItemText primary="GitHub" />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </AppbarContainer>
  );
};
