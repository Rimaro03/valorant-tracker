import { Typography } from "@mui/material";
import React from "react";
import { MapMetaWrapper } from "../../styles/Maps/mapsStyled";

export const MapMeta = ({ map, matches }) => {
  return (
    <MapMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {map.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        {map.coord}
      </Typography>
    </MapMetaWrapper>
  );
};
