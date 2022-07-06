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
          <Typography variant="caption2">
            Hi, I'm Leonardo, an IT student. I mainly develop website using
            JavaScript, but I've done many other projects. <br /> Take a look at
            by Github page!
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <GitHub sx={{ mr: 1 }} />
            <Instagram sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Informations</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About me
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                In-game items
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Utilities</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Riot games
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Valorant API
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Player tracking API
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Contact me</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Email: foo@gmail.com
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Mobile: 987 654 3210
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Address: 4525 Jessie Street, Los Angeles
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
