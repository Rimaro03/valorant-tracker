import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import React from "react";

export const MapList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true it's a mobile device

  return <div>MapList</div>;
};
