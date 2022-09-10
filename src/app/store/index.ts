import { configureStore } from '@reduxjs/toolkit'
import selectedCitiesSlice from './SelectedCitiesSlice'
import fetchingCitiesSlice from './FetchingCitiesSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import WeatherSlice from './WeatherSlice'
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
import { combineReducers } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    selectedCities: selectedCitiesSlice,
    fetchingCities: fetchingCitiesSlice,
    weather: WeatherSlice,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
