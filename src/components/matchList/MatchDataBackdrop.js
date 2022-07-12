import { Backdrop, IconButton } from "@mui/material";

import React from 'react'

export const MatchDataBackdrop = () => {
    const { matchDataOpen, setMatchDataOpen } = useUIContext();

    const handleClose = () => {
        setMatchDataOpen(false);
    }

    return (
        <Backdrop direction="down" open={handleClose} timeout={500}>
            <IconButton
                onClick={() => setMatchDataOpen(false)}
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                }}
            >
                <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
            </IconButton>
        </Backdrop>
    )
}
