import { Grid, Typography } from "@mui/material";
import React from "react";

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
      padding={0}
    >
      <Typography variant="h5" textTransform={"uppercase"}>
        {props.datas.data}
      </Typography>
      {props.datas.isImage ? (
        <img src={props.datas.value} />
      ) : (
        <Typography variant="h6">{props.datas.value}</Typography>
      )}
    </Grid>
  );
};
