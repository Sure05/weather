import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { City } from '../../../types'
import { StyledBlock, StyledRow } from './styled'

interface CitiesListProps {
    loading: boolean
    data: City[]
    selectCity: (city: City) => void
}

const CitiesList: React.FC<CitiesListProps> = ({
    loading,
    data,
    selectCity,
}) => {
    if (loading)
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2.5 }}>
                <CircularProgress />
            </Box>
        )
    if (data.length === 0) return null
    return (
        <StyledBlock>
            {data.map((el, index) => {
                return (
                    <StyledRow
                        onClick={() => selectCity(el)}
                        key={`${index}-${el.country}`}
                    >
                        <img
                            src={`https://openweathermap.org/images/flags/${el.country.toLowerCase()}.png`}
                            alt=""
                        />
                        {el.name}, {el.country}, {el.state}
                    </StyledRow>
                )
            })}
        </StyledBlock>
    )
}

export default CitiesList
