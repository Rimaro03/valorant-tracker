import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BannerContainer, BannerImage } from "../../styles/Banner/BannerStyled";

export const PlayerInfo = () => {
  const [player, setPlayer] = useState(
    JSON.parse(window.localStorage.getItem("playerStats"))
  );

  return (
    <BannerContainer>
      <Card sx={{ display: "flex" }}>
        <CardMedia component="img" image={`${player.card.small}`} />
        <CardContent>
          <Typography variant="h5" component="div">
            {`${player.name}#${player.tag}`}
          </Typography>
          <List>
            <ListItemText>Level: {player.account_level}</ListItemText>
          </List>
        </CardContent>
      </Card>
    </BannerContainer>
  );
};
