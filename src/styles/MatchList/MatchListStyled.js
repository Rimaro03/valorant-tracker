import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const SingleMatchContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const MatchMeta = styled(Box)(({ theme }) => ({
  display: "flex",
}));
