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
    if (
      !(
        e.target.attributes[0].nodeValue ==
          "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" ||
        e.target.attributes[0].nodeValue ==
          "MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
      )
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
