import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerInfo } from "../../components/playerInfo/PlayerInfo";
import Search from "../../components/search/Search";
import { UIProvider } from "../../context/ui";
import { Appbar } from "../../components/appbar/Appbar";
import { AppDrawer } from "../../components/drawer/Drawer";
import { Style } from "../../styles/AppBar/AppbarStyled";
import { Typography } from "@mui/material";
import { MatchList } from "../../components/matchList/MatchList";

export const Player = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("playerStats")) {
      navigate("/");
    }
  }, []);
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
      <UIProvider>
        <AppDrawer />
        <Style />
        <Search />
        <Appbar searchBar={true} />
        <PlayerInfo />
        <Typography
          variant="h4"
          display={"flex"}
          justifyContent="center"
          sx={{ p: 4 }}
        >
          Matches
        </Typography>
        <MatchList />
      </UIProvider>
    </Container>
  );
};
