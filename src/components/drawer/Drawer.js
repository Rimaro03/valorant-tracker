import {
  Button,
  ClickAwayListener,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useUIContext } from "../../context/ui/ui";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  const closeDrawer = (e) => {
    console.log(e);
    console.log("close");
    if (
      !(e.clientX > 40 && e.clientX < 80 && e.clientX > 40 && e.clientY < 80)
    ) {
      setDrawerOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={closeDrawer}>
      <Drawer open={drawerOpen} variant="persistent">
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Tracker</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>In-game items</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>GitHub</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </ClickAwayListener>
  );
};
