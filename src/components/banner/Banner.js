import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { BannerContainer } from "../../styles/Banner/BannerStyled";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true it's a mobile device

  return (
    <BannerContainer>
      <p>Banner</p>
    </BannerContainer>
  );
};
