import { TramRounded } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../API/request";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/themes/theme";

export const ModeMenu = () => {
  const availabelModes = [
    "escalation",
    "spikerush",
    "deathmatch",
    "competitive",
    "unrated",
    "replication",
  ];
  const { selectedModes, setSelectedModes } = useUIContext();

  const handleChoice = (e, mode) => {
    if (!e.target.checked) {
      let target = selectedModes.indexOf(mode);
      if (target) {
        let modes = selectedModes;
        modes.splice(target, 1);
        setSelectedModes(modes);
      }
    } else {
      let target = selectedModes.indexOf(mode);
      if (!target) {
        let modes = selectedModes;
        modes.push(mode);
        setSelectedModes(modes);
      }
    }
  };

  return (
    <Box sx={{ width: "20%" }}>
      <Box
        sx={{
          padding: "1em",
          marginRight: "2em",
          border: `1px solid ${Colors.light_gray}`,
          borderRadius: "1em",
          backgroundColor: Colors.light_gray,
        }}
      >
        <Typography variant="h6" sx={{ borderBottom: "1px solid grey" }}>
          Modes
        </Typography>
        <FormGroup>
          {availabelModes.map((mode, index) => {
            return (
              <FormControlLabel
                label={mode}
                key={index}
                control={
                  <Checkbox
                    defaultChecked={true}
                    onChange={(e) => handleChoice(e, mode)}
                    key={index}
                  />
                }
              />
            );
          })}
        </FormGroup>
      </Box>
    </Box>
  );
};
