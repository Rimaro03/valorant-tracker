import {
  Accordion,
  AccordionDetails,
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
import { MatchPreview } from "./MatchPreview";

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
  }, []);

  return (
    <Accordion>
      <AccordionSummary>
        <MatchPreview
          match={props.match}
          player={player}
          agentiIcon={agentIcon}
        />
        {console.log(agentIcon)}
      </AccordionSummary>
      <AccordionDetails>{/*graphic*/}</AccordionDetails>
    </Accordion>
  );
};
