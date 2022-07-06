import { GitHub, Instagram } from "@mui/icons-material";
import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import React from "react";
import { FooterTitle } from "../../styles/Footer/footerStyled";
import { Colors } from "../../styles/themes/theme";

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
                About me
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                In-game items
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Utilities</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Riot games
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Valorant API
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Player tracking API
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Contact me</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" >
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
