import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const PlayerinfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const PlayerStats = styled(Box)(({ theme }) => ({
  padding: "50px",
}));

export const PlayerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "auto",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));
