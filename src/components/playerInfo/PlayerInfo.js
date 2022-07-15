import { Icon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { playerRequest, publicRequest } from "../../API/request";
import { useUIContext } from "../../context/ui";
import {
  PlayerImage,
  PlayerinfoContainer,
  PlayerStats,
  PlayerTitle,
} from "../../styles/PlayerInfo/PlayerInfoStyled";
import { Loading } from "../search/Loading";
import { DataGrid } from "./DataGrid";

export const PlayerInfo = () => {
  const [rankIcon, setRankIcon] = useState();
  const [rr, setRr] = useState();
  const [level, setLevel] = useState();
  const [winRate, setWinRate] = useState();
  const player = JSON.parse(window.localStorage.getItem("playerStats"));

  const setRankingDatas = () => {
    playerRequest(`v1/mmr/eu/${player.name}/${player.tag}`).then((res) => {
      setRr(res.data.ranking_in_tier);
      getRankIcon(res.data.currenttierpatched.toUpperCase());
    });
  };

  const getRankIcon = (rankName) => {
    publicRequest("competitivetiers").then((res) =>
      setRankIcon(
        res.data[res.data.length - 1].tiers.find(
          (item) => item.tierName === rankName
        ).smallIcon
      )
    );
  };

  const getWinRate = () => {
    playerRequest(`v3/matches/eu/${player.name}/${player.tag}`).then((res) => {
      let matchesWon = 0;
      res.data.forEach((match) => {
        let team = match.players.all_players
          .find((singlePlayer) => singlePlayer.name == player.name)
          .team.toLowerCase();
        if (match.teams[team].has_won) {
          matchesWon += 1;
        }
      });
      setWinRate(`${(matchesWon / res.data.length) * 100}%`);
    });
  };

  useEffect(() => {
    setRankingDatas();
    getRankIcon();
    setLevel(player.account_level);
    getWinRate();
  }, []);

  return (
    <PlayerinfoContainer>
      <PlayerImage src={player.card.small} />
      <PlayerStats>
        <PlayerTitle variant="h3">
          {player.name}#{player.tag}
        </PlayerTitle>
        <DataGrid
          player={player}
          datas={[
            {
              data: "rank",
              value: rankIcon,
              isImage: true,
            },
            {
              data: "RR",
              value: rr,
              isImage: false,
            },
            {
              data: "level",
              value: level,
              isImage: false,
            },
            {
              data: "win rate",
              value: winRate,
              isImage: false,
            },
          ]}
        />
      </PlayerStats>
      <Loading />
    </PlayerinfoContainer>
  );
};
