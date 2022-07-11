import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const PlayersList = (props) => {
  return (
    <List>
      <Typography variant="h6">
        {props.teams.playerTeam.toUpperCase()} TEAM
      </Typography>
      {props.match.players[props.teams.playerTeam].map((player, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              <img src={player.assets.agent.small} width={"60px"} />
            </ListItemIcon>
            <ListItemText
              primary={`${player.name}:${player.tag}`}
              secondary={player.character}
            />
          </ListItem>
        );
      })}

      <Typography>{props.teams.enemyTeam.toUpperCase()} TEAM</Typography>
      {props.match.players[props.teams.enemyTeam].map((player, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              <img src={player.assets.agent.small} width={"60px"} />
            </ListItemIcon>
            <ListItemText
              primary={`${player.name}:${player.tag}`}
              secondary={player.character}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
