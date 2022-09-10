import React, { useContext } from 'react'
import { CurrentResponse } from '../../../types'
import { Box, Typography } from '@mui/material'
import { UnitContext } from '../../../../App'
import { convertC, convertF } from '../../../helpers'
import {
    StyledBox,
    StyledBoxContainer,
    StyledColumn,
    StyledTime,
} from './styled'

interface DiagramProps {
    info: CurrentResponse
}

const Diagram: React.FC<DiagramProps> = ({ info }) => {
    const tempUnit = useContext(UnitContext)
    const calculateColor = (t: number) => {
        const hue = 10 + (240 * (30 - convertC(t))) / 60
        return 'hsl(' + [hue, '100%', '50%'] + ')'
    }

    const convertDate = (unix?: number) => {
        if (!unix) return null
        const event = new Date(unix * 1000)
        return event.getHours()
    }

    return (
        <Box sx={{ mb: 5 }}>
            <Typography variant="h3">Hourly Weather</Typography>
            <StyledBoxContainer>
                <StyledBox width={`${info.hourly.length * 50}px`}>
                    {info.hourly.map((el) => {
                        return (
                            <StyledColumn key={el.dt}>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 20,
                                        textAlign: 'center',
                                        backgroundColor: calculateColor(
                                            Math.round(convertC(el.temp))
                                        ),
                                        position: 'absolute',
                                        bottom: `${
                                            Math.round(convertC(el.temp)) +
                                            (tempUnit?.mode ? 10 : 20)
                                        }vh`,
                                    }}
                                >
                                    {tempUnit?.mode
                                        ? convertF(el.temp).toFixed(0)
                                        : convertC(el.temp).toFixed(0)}
                                </Box>
                                <StyledTime>{convertDate(el.dt)}</StyledTime>
                            </StyledColumn>
                        )
                    })}
                </StyledBox>
            </StyledBoxContainer>
        </Box>
    )
}

export default Diagram
