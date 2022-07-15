import { Backdrop, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useUIContext } from '../../context/ui';

export const Loading = () => {
    const { loadingOpen, setLoadingOpen } = useUIContext();

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loadingOpen}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
