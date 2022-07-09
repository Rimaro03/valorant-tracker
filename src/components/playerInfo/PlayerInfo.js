import { Image, PaletteRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BannerContainer, BannerImage } from "../../styles/Banner/BannerStyled";
import {
  PlayerImage,
  PlayerinfoContainer,
  PlayerStats,
} from "../../styles/PlayerInfo/PlayerInfoStyled";

export const PlayerInfo = () => {
  const [player, setPlayer] = useState(
    JSON.parse(window.localStorage.getItem("playerStats"))
  );

  return (
    <PlayerinfoContainer>
      <PlayerImage src={player.card.large} />
      <PlayerStats>
        <Typography fontSize={"55px"}>
          {player.name}#{player.tag}
        </Typography>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ margin: "10px 4px 10px 4px" }}
        >
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
          >
            <Typography>Level</Typography>
            <Typography>Rank</Typography>
            <Typography>MMR</Typography>
            <Typography>Level</Typography>
          </Grid>
        </Grid>
      </PlayerStats>
    </PlayerinfoContainer>
  );
};
