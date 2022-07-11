import { Accordion, AccordionSummary, Icon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../API/request'

export const SingleMatch = (props) => {
    const player = props.match.players.all_players.find(singlePlayer => singlePlayer.name == props.player.name)
    const agent = player.character
    const [agentIcon, setAgentIcon] = useState();

    const getAgentIcon = () => {
        publicRequest("agents").then(res => setAgentIcon(res.data.find(singleAgent => singleAgent.displayName == agent).displayIcon))
    }

    useEffect(() => {
        getAgentIcon();
        console.log(agentIcon);
    }, [])

    return (
        <Accordion>
            <AccordionSummary>
                <img src={agentIcon} width="60px" />
            </AccordionSummary>
        </Accordion>
    )
}
