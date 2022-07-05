import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Appbar } from "../components/appbar/Appbar";
import { Banner } from "../components/banner/Banner";
import { MapList } from "../components/mapList/MapList";
import { Style } from "../styles/AppBar/AppbarStyled";
import { Colors } from "../styles/themes/theme";

function Tracker() {
  useEffect(() => {
    document.title = "valorant tracker home";
  }, []);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
      <Style />
      <Appbar />
      <Banner />
      <Typography
        variant="h4"
        display={"flex"}
        justifyContent="center"
        sx={{ p: 4 }}
      >
        Game Maps
      </Typography>
      <MapList />
      {/** 
        hidden drawer for mobile
        MainPage (welcome page)
        Footer
        */}
    </Container>
  );
}

export default Tracker;
