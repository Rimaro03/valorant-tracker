import { Grid, Typography } from "@mui/material";
import React from "react";
import { SingleData } from "./SingleData";

export const DataGrid = (props) => {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 8 }}
      sx={{ margin: "10px 4px 10px 4px" }}
    >
      {props.datas.map((item, index) => {
        return <SingleData player={props.player} datas={item} key={index} />;
      })}
    </Grid>
  );
};
