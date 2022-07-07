import { GitHub, Instagram } from "@mui/icons-material";
import { Box, Grid, Link, List, ListItemText, Typography } from "@mui/material";
import React from "react";
import { FooterTitle } from "../../styles/Footer/footerStyled";
import { Colors } from "../../styles/themes/theme";
import { MyLink } from "../../styles/Footer/footerStyled";

export const Footer = () => {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { sx: 4, md: 10 },
        pt: 12,
        plb: 12,
        fontSize: { xs: "12px", md: "12px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About me</FooterTitle>
          <Typography variant="caption">
            Hi, I'm Leonardo, an IT student. I mainly develop website using
            JavaScript, but I've done many other projects. <br /> Take a look at
            by Github page!
          </Typography>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Informations</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                <MyLink to="/">About me</MyLink>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                <MyLink to="/">Tracking</MyLink>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                <MyLink to="/items">In-game items</MyLink>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Utilities</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                <Link
                  href="https://www.riotgames.com/en"
                  underline="none"
                  color="inherit"
                >
                  Riot games
                </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                <Link
                  href="https://dash.valorant-api.com/"
                  underline="none"
                  color="inherit"
                >
                  Valorant API
                </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                <Link
                  href="https://docs.henrikdev.xyz/valorant.html"
                  underline="none"
                  color="inherit"
                >
                  Player tracking API
                </Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Contact me</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Email: foo@gmail.com
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Mobile: 987 654 3210
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Address: 4525 Jessie Street, Los Angeles
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
