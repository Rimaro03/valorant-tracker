import React from "react";
import { publicRequest } from "../../API/request";
import { useUIContext } from "../../context/ui";
import { Map, MapImage } from "../../styles/Maps/mapsStyled";
import { MapMeta } from "./MapMeta";

export const SingleMap = ({ map, matches }) => {
  const { showSchema, setShowSchema } = useUIContext();
  const { schemaMap, setSchemaMap } = useUIContext();

  const handleOpenSchema = () => {
    publicRequest("maps").then((res) =>
      setSchemaMap(
        res.data.find((mapName) => mapName.displayName === map.name).displayIcon
      )
    );
    if (!(map.name === "The Range")) {
      setShowSchema(true);
    }
  };

  return (
    <Map onClick={handleOpenSchema} sx={{ ":hover": { cursor: "pointer" } }}>
      <MapImage src={map.image} />
      <MapMeta map={map} matches={matches} />
    </Map>
  );
};
