import { Accordion, AccordionSummary, Container, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { playerRequest } from "../../API/request";
import { ModeMenu } from "./ModeMenu";
import { SingleMatch } from "./SingleMatch";

export const MatchList = () => {
  const player = JSON.parse(window.localStorage.getItem("playerStats"));
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    playerRequest(
      `v3/matches/eu/${player.name}/${player.tag}?filter=competitive`
    ).then((res) => setMatches(res.data));
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <Container >
      <ModeMenu />
      {matches.map((item, index) => {
        return <SingleMatch match={item} player={player} key={index} />;
      })}
    </Container>
  );
};