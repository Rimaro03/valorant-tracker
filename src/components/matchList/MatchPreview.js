import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import {
  MatchMeta,
  SingleMatchContainer,
} from "../../styles/MatchList/MatchListStyled";

export const MatchPreview = (props) => {
  return (
    <SingleMatchContainer>
      <ListItem>
        <ListItemIcon sx={{ marginRight: "1em" }}>
          <img src={props.agentIcon} width="60px" />
        </ListItemIcon>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography>{props.match.metadata.map.toUpperCase()}</Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography>{props.match.metadata.mode}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="center" sx={{ justifyContent: "center" }}>
        <Typography sx={{ textAlign: "center" }}>
          {props.match.teams.red.rounds_won} :{" "}
          {props.match.teams.blue.rounds_won}
        </Typography>
      </ListItem>

      <MatchMeta>
        <ListItem>
          <ListItemText
            primary={"K / D / A"}
            secondary={`${props.player.stats.kills} / ${props.player.stats.deaths} / ${props.player.stats.assists}`}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"K/D"}
            secondary={(props.player.stats.kills / props.player.stats.deaths)
              .toString()
              .slice(0, 3)}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"HS%"}
            secondary={`${(
              (props.player.stats.headshots /
                (props.player.stats.bodyshots +
                  props.player.stats.legshots +
                  props.player.stats.assists)) *
              100
            )
              .toString()
              .slice(0, 4)}%`}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
      </MatchMeta>
    </SingleMatchContainer>
  );
};
