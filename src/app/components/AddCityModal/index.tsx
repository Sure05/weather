import React, { useState } from 'react'
import { Button, InputAdornment, Modal, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {
    fetchingCitiesByName,
    resetList,
} from '../../store/FetchingCitiesSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import CitiesList from './CitiesList'
import { City } from '../../types'
import { StyledBox } from './styled'
import { addCity } from '../../store/SelectedCitiesSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const AddCityModal: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const { data, loading } = useAppSelector((state) => state.fetchingCities)
    const dispatch = useAppDispatch()
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        dispatch(resetList())
        setOpen(false)
        setName('')
        if (location.pathname !== '/') navigate('/')
    }
    const search = () => dispatch(fetchingCitiesByName(name))
    const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && name.length > 2)
            dispatch(fetchingCitiesByName(name))
    }
    const selectCity = (city: City) => {
        dispatch(addCity(city))
        handleClose()
        // console.log(city)
    }
    return (
        <>
            <Button
                variant="outlined"
                color="inherit"
                onClick={handleOpen}
                title="Add city"
            >
                +
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledBox>
                    <TextField
                        focused
                        onKeyDown={keyDown}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        label="City name"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button onClick={search}>
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <CitiesList
                        loading={loading}
                        data={data}
                        selectCity={selectCity}
                    />
                </StyledBox>
            </Modal>
        </>
    )
}

export default AddCityModal
