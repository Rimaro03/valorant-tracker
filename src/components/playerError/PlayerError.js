import { Alert, Button, IconButton, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useUIContext } from '../../context/ui'

export const PlayerError = (props) => {
    const { snackOpen, setSnackOpen } = useUIContext();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };

    return (
        <Snackbar
            open={snackOpen}
            autoHideDuration={500}
        >
            <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
                Player not found!
            </Alert>
        </Snackbar>
    )
}
