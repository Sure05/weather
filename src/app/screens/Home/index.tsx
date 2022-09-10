import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Card from '../../components/Card'
import { useAppSelector } from '../../store'

const Home: React.FC = () => {
    const list = useAppSelector((state) => state.selectedCities)

    useEffect(() => {
        if (list.length > 0) console.log('fetchWeather')
    }, [list])
    if (list.length === 0)
        return (
            <Typography variant="h3">Please, add any city to list</Typography>
        )
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                {list.map((el) => {
                    return (
                        <Grid key={el.id} item xs={12} sm={6} md={4} xl={3}>
                            <Card cityInfo={el} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Home
