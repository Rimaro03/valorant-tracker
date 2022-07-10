import { Grid, Typography } from "@mui/material";
import React from "react";
import { DataTitle, DataValue } from "../../styles/PlayerInfo/PlayerInfoStyled";

export const SingleData = (props) => {
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      padding={"0.5em"}
    >
      <DataTitle variant="h6" textTransform={"uppercase"}>
        {props.datas.data}
      </DataTitle>
      {props.datas.isImage ? (
        <img src={props.datas.value} />
      ) : (
        <DataValue variant="subtitle1">{props.datas.value}</DataValue>
      )}
    </Grid>
  );
};
