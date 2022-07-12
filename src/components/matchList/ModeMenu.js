import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../API/request';
import { useUIContext } from '../../context/ui';

export const ModeMenu = () => {
    const [availabelModes, setAvailableModes] = useState([]);
    const { selectedModes, setSelectedModes } = useUIContext([]);

    const getModes = () => {
        let modesList = []
        publicRequest("gamemodes").then(res => res.data.forEach(mode => {
            modesList.push({ name: mode.displayName, selected: true })
        }))
        setSelectedModes(modesList)
    }

    const handleChoice = (e) => {
        console.log(e)
    };

    useEffect(() => {
        getModes();
    }, [])

    return (
        <FormGroup>
            {selectedModes.map((mode, index) => {
                return (
                    <FormControlLabel
                        label={mode.name}
                        control={<Checkbox checked={true} onChange={handleChoice}
                            key={index}
                        />}
                    />
                )
            })}
        </FormGroup>
    );
}
