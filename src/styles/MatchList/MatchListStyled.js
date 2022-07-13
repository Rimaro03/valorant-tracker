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
  borderLeft: `5px solid ${match.metadata.mode === "Deathmatch" ? "green" : `${match.teams[teams.playerTeam].has_won ? "green" : "red"}`}`,
  cursor: "pointer",
  borderRadius: "0.5em",
  backgroundImage: `linear-gradient(to right, ${match.metadata.mode === "Deathmatch" ? "#88ec88" : `${match.teams[teams.playerTeam].has_won ? "#88ec88" : "#FF7F7F"}`}, ${Colors.light_gray}, ${Colors.light_gray}, ${Colors.light_gray}, ${Colors.light_gray})`
}));

export const MatchMeta = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));