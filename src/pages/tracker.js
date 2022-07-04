import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Appbar } from "../components/appbar/Appbar";
import { Banner } from "../components/banner/Banner";
import { Style } from "../styles/AppBar/AppbarStyled";

function Tracker() {
  useEffect(() => {
    document.title = "valorant tracker home";
  }, []);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
      <Style />
      <Appbar />
      <Banner />
      {/** 
        hidden drawer for mobile
        MainPage (welcome page)
        Footer
        */}
    </Container>
  );
}

export default Tracker;
