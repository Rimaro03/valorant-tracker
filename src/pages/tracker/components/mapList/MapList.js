import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { SingleMap } from "./SingleMap";
import { publicRequest } from "../../../../API/request";

export const MapList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true it's a mobile device
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    publicRequest("maps").then((res) => {
      let mapsPartial = [];
      res.data.map((item, index) => {
        mapsPartial.push({
          id: index,
          name: item.displayName,
          coord: item.coordinates,
          image: item.splash,
        });
      });
      setMaps(mapsPartial);
    });
  }, []);

  const renderMaps = maps.map((map) => {
    console.log(1);
    return (
      <Grid
        item
        key={map.id}
        xs={2}
        sm={4}
        md={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
      >
        <SingleMap map={map} matches={matches} />
      </Grid>
    );
  });

  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ margin: "10px 4px 10px 4px" }}
      >
        {renderMaps}
      </Grid>
    </Container>
  );
};
