import { Search, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useUIContext } from "../../context/ui";
import {
  AppbarContainer,
  AppbarHeader,
} from "../../styles/AppBar/AppbarStyled";

export const MobileBar = (props, { matches }) => {
  const { setDrawerOpen } = useUIContext();
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <IconButton
        onClick={() => {
          console.log("open");
          setDrawerOpen(true);
        }}
      >
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={"center"}>trAcker</AppbarHeader>
      {props.searchBar ? (
        <IconButton
          sx={{ justifyContent: "center" }}
          onClick={() => setShowSearchBox(true)}
        >
          <Search />
        </IconButton>
      ) : (
        <></>
      )}
    </AppbarContainer>
  );
};
