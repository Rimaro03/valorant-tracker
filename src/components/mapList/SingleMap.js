import React from "react";
import { Map, MapImage } from "../../styles/Maps/mapsStyled";
import { MapMeta } from "./MapMeta";

export const SingleMap = ({ map, matches }) => {
  return (
    <Map>
      <MapImage src={map.image} />
      <MapMeta map={map} matches={matches} />
    </Map>
  );
};
