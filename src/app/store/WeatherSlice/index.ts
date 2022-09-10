import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { City, CurrentResponse } from '../../types'
import { api } from '../../api'

const initialState: CurrentResponse[] = []

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (data: City) => {
        const weather = await api.get(
            // `data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=alerts&units=metric`
            `data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=alerts`
        )
        return { info: weather.data, id: data.id }
    }
)

const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id)
            if (index === -1) {
                state.push({ ...action.payload.info, id: action.payload.id })
            } else {
                state[index] = { ...action.payload.info, id: action.payload.id }
            }
            return state
        })
    },
})

export default WeatherSlice.reducer
