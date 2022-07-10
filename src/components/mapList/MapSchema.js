import { Close } from "@mui/icons-material";
import { Backdrop, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../API/request";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/themes/theme";
import { SearchBoxContainer } from "../search/Search";

export const MapSchema = () => {
  const { showSchema, setShowSchema } = useUIContext();
  const { schemaMap, setSchemaMap } = useUIContext();

  return (
    <Backdrop open={showSchema}>
      <SearchBoxContainer>
        <img src={schemaMap} />
        <IconButton
          onClick={() => setShowSchema(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Close sx={{ fontSize: "4rem" }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Backdrop>
  );
};
