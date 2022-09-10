import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { City } from '../../types'
import { api } from '../../api'

export interface InitialStateType {
    loading: boolean
    data: City[]
}

const initialState: InitialStateType = {
    loading: false,
    data: [],
}

export const fetchingCitiesByName = createAsyncThunk(
    'fetchingCities/fetch',
    async (name: string) => {
        const data = await api.get(`/geo/1.0/direct?q=${name}&limit=5`)
        return data.data as City[]
    }
)

export const FetchingCitiesSlice = createSlice({
    name: 'fetchingCities',
    initialState,
    reducers: {
        resetList: (state) => {
            state.data = []
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchingCitiesByName.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchingCitiesByName.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
    },
})

export const { resetList } = FetchingCitiesSlice.actions
export default FetchingCitiesSlice.reducer
