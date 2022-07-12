import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../API/request";
import { useUIContext } from "../../context/ui";
import { MatchMeta, SingleMatchContainer } from "../../styles/MatchList/MatchListStyled";

export const SingleMatch = (props) => {
  const player = props.match.players.all_players.find(
    (singlePlayer) => singlePlayer.name == props.player.name
  );
  const agent = player.character;
  const [agentIcon, setAgentIcon] = useState();
  const { matchDataOpen, setMatchDataOpen } = useUIContext();

  const openMatch = () => { setMatchDataOpen(true); }

  const teams = {
    playerTeam: player.team.toLowerCase(),
    enemyTeam: player.team.toLowerCase() === "red" ? "blue" : "red",
  };

  const getAgentIcon = () => {
    publicRequest("agents").then((res) =>
      setAgentIcon(
        res.data.find((singleAgent) => singleAgent.displayName == agent)
          .displayIcon
      )
    );
  };

  useEffect(() => {
    getAgentIcon();
  }, []);

  return (
    <SingleMatchContainer match={props.match} teams={teams} onClick={openMatch}>
      <ListItem>
        <ListItemIcon sx={{ marginRight: "1em" }}>
          <img src={agentIcon} width="60px" />
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
        {props.match.metadata.mode === "Deathmatch" ? (
          <></>
        ) : (
          <Typography sx={{ textAlign: "center" }}>
            {props.match.teams[teams.playerTeam].rounds_won} :{" "}
            {props.match.teams[teams.enemyTeam].rounds_won}
          </Typography>
        )}
      </ListItem>

      <MatchMeta>
        <ListItem>
          <ListItemText
            primary={"K / D / A"}
            secondary={`${player.stats.kills} / ${player.stats.deaths} / ${player.stats.assists}`}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"K/D"}
            secondary={(player.stats.kills / player.stats.deaths)
              .toString()
              .slice(0, 3)}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"HS%"}
            secondary={`${(
              (player.stats.headshots /
                (player.stats.bodyshots +
                  player.stats.legshots +
                  player.stats.assists)) *
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
