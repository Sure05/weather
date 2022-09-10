import React, { useContext } from 'react'
import { DailyWeather } from '../../types'
import { Box, Typography } from '@mui/material'
import { convertC, convertF } from '../../helpers'
import { UnitContext } from '../../../App'
import { StyledBoxContainer, StyledWeekElements } from './styled'

interface DailyWeatherProps {
    info: DailyWeather[]
}

const DailyWeatherElement: React.FC<DailyWeatherProps> = ({ info }) => {
    const tempUnit = useContext(UnitContext)
    return (
        <Box sx={{ mb: 5 }}>
            <Typography variant="h3">Daily Weather</Typography>
            <StyledWeekElements>
                <StyledBoxContainer>
                    {info.map((day, i) => {
                        return (
                            <div className="box_info" key={i.toString()}>
                                <div>
                                    {new Date(day.dt * 1000).toLocaleString(
                                        'en-US',
                                        { weekday: 'short' }
                                    )}
                                </div>
                                <img
                                    alt={day.weather[0].description}
                                    title={day.weather[0].description}
                                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                />
                                <div className="temp_info">
                                    <span>
                                        {tempUnit?.mode
                                            ? convertF(day.temp.max).toFixed(0)
                                            : convertC(day.temp.max).toFixed(0)}
                                        °{' '}
                                    </span>
                                    <span> - </span>
                                    <span className="light-text">
                                        {tempUnit?.mode
                                            ? convertF(day.temp.min).toFixed(0)
                                            : convertC(day.temp.min).toFixed(0)}
                                        ° {tempUnit?.mode ? 'F' : 'C'}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </StyledBoxContainer>
            </StyledWeekElements>
        </Box>
    )
}

export default DailyWeatherElement
