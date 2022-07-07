import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const MyLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
}));
