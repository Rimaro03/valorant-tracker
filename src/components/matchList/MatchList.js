import { Accordion, AccordionSummary, Container, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getMatchesList } from "./getMatchesList";
import { ModeMenu } from "./ModeMenu";
import { SingleMatch } from "./SingleMatch";

export const MatchList = () => {
  const player = JSON.parse(window.localStorage.getItem("playerStats"));
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(getMatchesList(player))
  }, [])

  return (
    <Container sx={{ display: "flex" }}>
      <ModeMenu />
      <Box width="80%">
        {console.log(matches)}
        {matches.map((item, index) => {
          return (
            <Box key={index}>
              <Typography variant="h6" >{item.date}</Typography>
              {
                item.datas.map((item2, index2) => {
                  return <SingleMatch match={item2} player={player} key={index2} />;
                })
              }
            </Box>
          );
        })}
      </Box>
    </Container >
  );
};
