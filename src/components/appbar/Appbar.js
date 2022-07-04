import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { DesktopBar } from "./DesktopBar";
import { MobileBar } from "./MobileBar";

export const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true it's a mobile device

  return <>{matches ? <MobileBar /> : <DesktopBar />}</>;
};
