import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Appbar } from "../../global-components/appbar/Appbar";
import { Banner } from "./components/banner/Banner";
import { AppDrawer } from "../../global-components/drawer/Drawer";
import { Footer } from "../../global-components/footer/Footer";
import Search from "./components/search/Search";
import { UIProvider } from "../../context/ui/ui";
import { Style } from "../../styles/AppBar/AppbarStyled";
import { MapList } from "./components/mapList/MapList";

function Tracker() {
  useEffect(() => {
    document.title = "valorant tracker home";
  }, []);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
      <UIProvider>
        <AppDrawer />
        <Search />
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
