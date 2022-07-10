import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../themes/theme";

export const PlayerinfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "50px 0px 0px 0px",
  backgroundColor: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const PlayerStats = styled(Box)(({ theme }) => ({
  padding: "50px",
  paddingTop: 0,
}));

export const PlayerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "200px",
  height: "200px",

  [theme.breakpoints.down("md")]: {
    width: "150px",
    height: "150px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "auto",
  },
}));

export const PlayerTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "1em",
  fontSize: "30px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

export const DataTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const DataValue = styled(Typography)(({ theme }) => ({}));
