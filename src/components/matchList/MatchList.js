import { Accordion, AccordionSummary, Container, List } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { playerRequest } from "../../API/request";
import { useUIContext } from "../../context/ui";
import { ModeMenu } from "./ModeMenu";
import { SingleMatch } from "./SingleMatch";

export const MatchList = () => {
  const player = JSON.parse(window.localStorage.getItem("playerStats"));
  const [matches, setMatches] = useState([]);
  const { selectedModes, setSelectedModes } = useUIContext();

  const getMatches = () => {
    let matchList = [];
    selectedModes.forEach((mode) => {
      playerRequest(
        `v3/matches/eu/${player.name}/${player.tag}?filter=${mode}`
      ).then((res) => {
        matchList.concat(res.data);
      });
    });
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <Container sx={{ display: "flex" }}>
      <ModeMenu />
      <Box width="80%">
        {matches.map((item, index) => {
          return <SingleMatch match={item} player={player} key={index} />;
        })}
      </Box>
    </Container>
  );
};
