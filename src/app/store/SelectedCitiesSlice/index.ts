import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City } from '../../types'

let initialState: City[] = []

const localCities = localStorage.getItem('cities')
if (localCities) initialState = JSON.parse(localCities)

export const SelectedCitiesSlice = createSlice({
    name: 'selectedCities',
    initialState,
    reducers: {
        dropCity: (state, action: PayloadAction<string>) => {
            const filtered = state.filter((el) => el.id !== action.payload)
            localStorage.setItem('cities', JSON.stringify(filtered))
            return filtered
        },
        addCity: (state, action) => {
            if (
                state.findIndex(
                    (el) =>
                        el.lat === action.payload.lat &&
                        el.lon === action.payload.lon
                ) === -1
            ) {
                state.push({
                    ...action.payload,
                    id: 'id' + Math.random().toString(16).slice(2),
                })
                localStorage.setItem('cities', JSON.stringify(state))
            }
            return state
        },
    },
})
export const { addCity, dropCity } = SelectedCitiesSlice.actions
export default SelectedCitiesSlice.reducer
