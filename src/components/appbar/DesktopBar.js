import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"
import {
  AppbarContainer,
  AppbarHeader,
  MyLink,
  MyList,
} from "../../styles/AppBar/AppbarStyled";

export const DesktopBar = ({ matches }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>TRaCKER</AppbarHeader>
      <MyList type="row">
        <ListItem>
          <MyLink to="/tracker">Tracker</MyLink>
        </ListItem>
        <ListItem>
          <MyLink to="/items">In-game items</MyLink>
        </ListItem>
        <ListItem>
          <MyLink to="/tracker">GitHub</MyLink>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </MyList>
    </AppbarContainer>
  );
};
