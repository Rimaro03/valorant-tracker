import { Accordion, AccordionSummary, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { playerRequest } from '../../API/request';
import { SingleMatch } from './SingleMatch';

export const MatchList = () => {
    const player = JSON.parse(window.localStorage.getItem("playerStats"))
    const [matches, setMatches] = useState([]);

    const getMatches = () => {
        playerRequest(`v3/matches/eu/${player.name}/${player.tag}`).then(res => setMatches(res.data))
    }

    useEffect(() => {
        getMatches();
    }, [])

    return (
        <Container>
            {matches.map((item, index) => {
                return (<SingleMatch match={item} player={player} key={index} />)
            })}
        </Container>
    )
}
