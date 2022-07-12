import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Colors } from "../themes/theme";

export const SingleMatchContainer = styled(Box)(({ match, teams, theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "1em",
  padding: "0.5em",
  borderLeft: `5px solid ${match.teams[teams.playerTeam].has_won ? "green" : "red"}`,
  backgroundImage: `linear-gradient(to right, ${match.teams[teams.playerTeam].has_won ? "#88ec88" : "#FF7F7F"}, ${Colors.light_gray}, ${Colors.light_gray}, ${Colors.light_gray}, ${Colors.light_gray})`,
  cursor: "pointer",
  borderRadius: "0.5em"
}));

export const MatchMeta = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));