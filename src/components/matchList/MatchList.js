import { Accordion, AccordionSummary, Container, List, Typography } from "@mui/material";
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
        let datas = res.data;
        datas.forEach(matchData => {
          let day = matchData.metadata.game_start_patched.split(new Date().getFullYear())[0].trim()
          day = day.slice(0, -1)
          console.log(matchData.metadata.game_start_patched.length - 2);
          let object = matchList.find(list => list.day === day);
          if (object) {
            object.datas.push(matchData)
          }
          else {
            matchList.push({ day: day, datas: [matchData] });
          }
        })
        /*matchList = matchList.concat(list)*/
        console.log(matchList);
        setMatches(matchList)
      });
    });
  };

  /*const sortData = () => {
    const badFormattedDatas = matches;
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    console.log(matches)
    matches.forEach(match => {
      const day = badDate.splice(", ")[0].toLowerCase();
      const month = badDate.splice(", ")[1].toLowerCase();
      const year = badDate.splice(", ")[2].slice(0, 3);
      console.log(day, month, year);
      return `${days.indexOf(day)}/${months.indexOf(month)}/${year}`;
    })
  }*/

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <Container sx={{ display: "flex" }}>
      <ModeMenu />
      <Box width="80%">
        {matches.map((item, index) => {
          return <Box>
            <Typography variant="h6">{item.day}</Typography>
            {item.datas.map((item2, index2) => {
              return <SingleMatch match={item2} player={player} key={index2} />;
            })}
          </Box>
        })}
      </Box>
    </Container>
  );
};
