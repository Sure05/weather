import React, { createContext } from 'react'
import {
    Box,
    createTheme,
    CssBaseline,
    ThemeProvider,
    Toolbar,
} from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from './app/screens/Home'
import NotFound from './app/screens/NotFound'
import CityCard from './app/components/CityCard'
import { useTempUnit } from './app/hooks/useTempUnit'
import { useNightMode } from './app/hooks/useNightMode'
import AppBarComponent from './app/components/AppBar'
import { dark, light } from './app/helpers/themes'

interface ContextType {
    mode: boolean | (() => void)
    darkTheme: boolean
    unitModeChanged: (mode: boolean) => void
    nightModeChanged: () => void
}

export const UnitContext = createContext<ContextType | null>(null)

function App() {
    const [unitMode, unitModeChanged] = useTempUnit()
    const [nightMode, nightModeChanged] = useNightMode()

    const context: ContextType = {
        mode: unitMode,
        darkTheme: nightMode,
        unitModeChanged,
        nightModeChanged,
    }

    return (
        <ThemeProvider
            theme={nightMode ? createTheme(dark) : createTheme(light)}
        >
            <CssBaseline />
            <UnitContext.Provider value={context}>
                <Box sx={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<AppBarComponent />}>
                            <Route index element={<Home />}></Route>
                            <Route path={'/not-found'} element={<NotFound />} />
                            <Route path={':id'} element={<CityCard />}></Route>
                        </Route>
                    </Routes>
                    <Toolbar />
                </Box>
            </UnitContext.Provider>
        </ThemeProvider>
    )
}

export default App
