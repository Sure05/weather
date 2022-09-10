import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import { Container, Typography } from '@mui/material'
import { fetchWeather } from '../../store/WeatherSlice'
import Diagram from './Diagram'
import TodayHighlights from '../TodayHighlights'
import DailyWeatherElement from '../DailyWeather'

const CityCard: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const weather = useAppSelector((state) => {
        return state.weather.find((el) => el.id === id)
    })
    const city = useAppSelector((state) => {
        return state.selectedCities.find((el) => el.id === id)
    })
    useEffect(() => {
        if (!city && !weather) navigate('/not-found')
        if (city && !weather) dispatch(fetchWeather(city))
    }, [navigate, city, weather])

    return (
        <Container maxWidth="xl">
            <Typography variant={'h2'} sx={{ mb: 5 }}>
                {city?.name}, {city?.country}
            </Typography>
            {weather && (
                <>
                    <DailyWeatherElement info={weather.daily} />
                    <TodayHighlights info={weather.current} />
                    <Diagram info={weather} />
                </>
            )}
        </Container>
    )
}

export default CityCard
