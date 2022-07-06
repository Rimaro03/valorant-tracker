import { ClickAwayListener, IconButton } from "@mui/material";
import { Box, styled, width } from "@mui/system";
import { Colors } from "../themes/theme";

export const Map = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    position: "relative",
  },
}));

export const MapImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  backgroundColor: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

export const MapMetaWrapper = styled(Box)(() => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
