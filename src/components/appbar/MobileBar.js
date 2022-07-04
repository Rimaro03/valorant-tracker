import { Search, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import {
  AppbarContainer,
  AppbarHeader,
} from "../../styles/AppBar/AppbarStyled";

export const MobileBar = ({ matches }) => {
  return (
    <AppbarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={"center"}>trAcker</AppbarHeader>
      <IconButton>
        <Search />
      </IconButton>
    </AppbarContainer>
  );
};
