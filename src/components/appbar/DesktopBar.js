import { Search } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import { useUIContext } from "../../context/ui/ui";
import {
  AppbarContainer,
  AppbarHeader,
  MyLink,
  MyList,
} from "../../styles/AppBar/AppbarStyled";

export const DesktopBar = ({ matches }) => {
  const { setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <AppbarHeader>TRaCKER</AppbarHeader>
      <MyList type="row">
        <ListItem>
          <MyLink to="/tracker">Tracker</MyLink>
        </ListItem>
        <ListItem>
          <MyLink to="/items">Game items</MyLink>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.github.com/Rimaro03/valorant-tracker"
            underline="none"
            color="inherit"
          >
            GitHub
          </Link>
        </ListItem>
        <ListItem>
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
        </ListItem>
      </MyList>
    </AppbarContainer>
  );
};
