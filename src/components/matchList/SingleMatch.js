import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../API/request";
import { MatchPreview } from "./MatchPreview";
import { PlayersList } from "./PlayersList";

export const SingleMatch = (props) => {
  const player = props.match.players.all_players.find(
    (singlePlayer) => singlePlayer.name == props.player.name
  );
  const agent = player.character;
  const [agentIcon, setAgentIcon] = useState();
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
    <Accordion>
      <AccordionSummary>
        <MatchPreview
          match={props.match}
          player={player}
          agentIcon={agentIcon}
          teams={teams}
        />
        {console.log(teams)}
      </AccordionSummary>
      <AccordionDetails>
        <PlayersList match={props.match} player={player} teams={teams} />
      </AccordionDetails>
    </Accordion>
  );
};
