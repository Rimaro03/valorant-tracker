import {
  Accordion,
  AccordionSummary,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../API/request";
import {
  MatchMeta,
  SingleMatchContainer,
} from "../../styles/MatchList/MatchListStyled";

export const SingleMatch = (props) => {
  const player = props.match.players.all_players.find(
    (singlePlayer) => singlePlayer.name == props.player.name
  );
  const agent = player.character;
  const [agentIcon, setAgentIcon] = useState();

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
    console.log(agentIcon);
  }, []);

  return (
    <Accordion>
      <AccordionSummary>
        <SingleMatchContainer>
          <ListItem>
            <ListItemIcon sx={{ marginRight: "1em" }}>
              <img src={agentIcon} width="60px" />
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography>
                    {props.match.metadata.map.toUpperCase()}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography>{props.match.metadata.mode}</Typography>
                </React.Fragment>
              }
            />
          </ListItem>

          <ListItem>
            <Typography>
              {props.match.teams.red.rounds_won} :{" "}
              {props.match.teams.blue.rounds_won}
            </Typography>
          </ListItem>

          <MatchMeta>
            <ListItem>
              <ListItemText
                primary={"K/D/A"}
                secondary={`${player.stats.kills}/${player.stats.deaths}/${player.stats.assists}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={"K/D%"}
                secondary={(player.stats.kills / player.stats.deaths)
                  .toString()
                  .slice(0, 3)}
              />
            </ListItem>
          </MatchMeta>
        </SingleMatchContainer>
      </AccordionSummary>
    </Accordion>
  );
};
