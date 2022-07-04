import { Box, styled } from "@mui/system";
import { Colors } from "../themes/theme";

export const BannerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  backgroundColor: Colors.light_purple,
}));
