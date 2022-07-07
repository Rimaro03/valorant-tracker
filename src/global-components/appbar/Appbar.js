import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { DesktopBar } from "./DesktopBar";
import { MobileBar } from "./MobileBar";

export const Appbar = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true it's a mobile device

  return <>{matches ? <MobileBar searchBar={props.searchBar} /> : <DesktopBar searchBar={props.searchBar} />}</>;
};
