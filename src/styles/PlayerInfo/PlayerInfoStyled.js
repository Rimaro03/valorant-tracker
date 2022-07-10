import styled from "@emotion/styled";
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
  width: "auto",
  height: "150px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));
