import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Appbar } from "../../components/appbar/Appbar";
import { AppDrawer } from "../../components/drawer/Drawer";
import { Footer } from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import { UIProvider } from "../../context/ui";
import { Style } from "../../styles/AppBar/AppbarStyled";
import { MapList } from "../../components/mapList/MapList";
import { Banner } from "../../components/banner/Banner";
import { MapSchema } from "../../components/mapList/MapSchema";

function Tracker() {
  useEffect(() => {
    document.title = "valorant tracker home";
  }, []);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
      <UIProvider>
        <AppDrawer />
        <Search />
        <MapSchema />
        <Style />
        <Appbar searchBar={true} />
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
        <Footer />
        {/** 
        hidden drawer for mobile
        MainPage (welcome page)
        Footer
        */}
      </UIProvider>
    </Container>
  );
}

export default Tracker;
