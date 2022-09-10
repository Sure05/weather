import { Box, Button } from '@mui/material'
import { Close } from '@mui/icons-material'
import React, { useContext, useEffect } from 'react'
import {
    StyledCardContent,
    StyledCardElement,
    StyledCityName,
    StyledDate,
    StyledDropButton,
    StyledTemp,
} from './styled'
import { City } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store'
import { fetchWeather } from '../../store/WeatherSlice'
import { dropCity } from '../../store/SelectedCitiesSlice'
import { useNavigate } from 'react-router-dom'
import { UnitContext } from '../../../App'
import { convertC, convertF } from '../../helpers'

interface CardProps {
    cityInfo: City
}

const Card: React.FC<CardProps> = ({ cityInfo }) => {
    const unitType = useContext(UnitContext)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const weather = useAppSelector((state) => {
        return state.weather.find((el) => el.id === cityInfo.id)
    })
    useEffect(() => {
        if (!weather) dispatch(fetchWeather(cityInfo))
    }, [cityInfo, dispatch, weather])
    const dropCityFromList = () => dispatch(dropCity(cityInfo.id))
    const update = () => dispatch(fetchWeather(cityInfo))
    const goTo = () => navigate(`/${cityInfo.id}`)
    const convertDate = (unix?: number, zone?: string) => {
        if (!unix) return null
        const event = new Date(unix * 1000)
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            timeZone: zone,
        }
        return event.toLocaleDateString('en-EN', options)
    }
    return (
        <StyledCardElement sx={{ minWidth: 275 }}>
            <StyledDropButton onClick={dropCityFromList}>
                <Close />
            </StyledDropButton>
            <StyledCardContent onClick={goTo}>
                <StyledCityName>
                    {cityInfo.name}, {cityInfo.country}
                </StyledCityName>
                {weather && (
                    <StyledDate className="date">
                        {convertDate(weather.current.dt, weather.timezone)}
                    </StyledDate>
                )}
                <div className="weather">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {weather && (
                            <img
                                alt={weather.current.weather[0].description}
                                title={weather.current.weather[0].description}
                                src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
                            />
                        )}
                        <StyledTemp className="temp">
                            {weather &&
                                (unitType?.mode
                                    ? convertF(weather.current.temp).toFixed(0)
                                    : convertC(weather.current.temp).toFixed(
                                          0
                                      ))}
                            ° {unitType?.mode ? 'F' : 'C'}
                        </StyledTemp>
                    </Box>
                </div>
            </StyledCardContent>
            <Button fullWidth variant="contained" onClick={update}>
                Update
            </Button>
        </StyledCardElement>
    )
}

export default React.memo(Card)
