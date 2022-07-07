import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../../../styles/Banner/BannerStyled";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true it's a mobile device

  return (
    <BannerContainer>
      <BannerImage src="/images/mainImage" />
      <BannerContent>
        <Typography variant="h6">The unofficial</Typography>
        <BannerTitle variant="h2">Valorant Tracker</BannerTitle>
        <BannerDescription variant="subtitle1">
          A website that lets you track other player's stats or brows in-game
          agents, skins and a lot more!
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};
