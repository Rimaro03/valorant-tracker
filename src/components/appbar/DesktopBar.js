import { Search } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItem,
  Typography,
  ListItemText,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import { useUIContext } from "../../context/ui";
import {
  AppbarContainer,
  AppbarHeader,
  MyLink,
  MyList,
} from "../../styles/AppBar/AppbarStyled";

export const DesktopBar = (props, { matches }) => {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader>TRaCKER</AppbarHeader>
      <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        <ListItem sx={{ justifyContent: "center", alignItems: "center" }}>
          <MyLink to="/tracker" sx={{ textAlign: "center" }}>Tracker</MyLink>
        </ListItem>
        <ListItem sx={{ justifyContent: "center", alignItems: "center" }}>
          <MyLink to="/items">Game items</MyLink>
        </ListItem >
        <ListItem sx={{ justifyContent: "center", alignItems: "center" }}>
          <Link
            href="https://www.github.com/Rimaro03/valorant-tracker"
            underline="none"
            color="inherit"
          >
            GitHub
          </Link>
        </ListItem>
        <ListItem>
          {props.searchBar ? (
            <ListItemButton
              sx={{ justifyContent: "center" }}
              onClick={() => setShowSearchBox(true)}
            >
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="button">Search</Typography>
              </ListItemText>
            </ListItemButton>
          ) : (
            <></>
          )}
        </ListItem>
      </Box>
    </AppbarContainer>
  );
};
