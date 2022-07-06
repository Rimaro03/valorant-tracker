import { List, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../themes/theme";
import "@fontsource/montez";
import { createGlobalStyle } from "styled-components";
import valfont from "./valFont.ttf";
import { Link } from "react-router-dom";

export const Style = createGlobalStyle`
  @font-face {
    font-family: "Valorant";
    font-style: normal;
    font-weight: 400;
    src: url(${valfont}), local("Valorant");
  }
`;

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: "Valorant",
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 2,
  justifyContent: "center",
  alignItems: "center"
}));

export const MyLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
}))