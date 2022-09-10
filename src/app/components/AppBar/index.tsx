import React, { useContext, useEffect, useState } from 'react'
import { AppBar, Box, Button, Link, Switch, Toolbar } from '@mui/material'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import AddCityModal from '../AddCityModal'
import { UnitContext } from '../../../App'

const AppBarComponent: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [unitMode, setUnitMode] = useState(false)
    const context = useContext(UnitContext)
    const changeTheme = () => {
        if (context) context.nightModeChanged()
    }
    const changeUnit = (val: boolean) => {
        if (context) context.unitModeChanged(val)
    }

    useEffect(() => {
        if (context) {
            setUnitMode(Boolean(context.mode))
            setDarkMode(context.darkTheme)
        }
    }, [context])

    return (
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <Switch checked={darkMode} onChange={changeTheme} />
                    <Link
                        sx={{ flexGrow: 1, textDecoration: 'none', pr: 5 }}
                        variant="h6"
                        color="inherit"
                        component={RouterLink}
                        to={'/'}
                    >
                        Weather
                    </Link>
                    <Box display="flex" className="temperature">
                        <Button
                            sx={{ mr: 2 }}
                            disabled={!unitMode}
                            variant="outlined"
                            color="inherit"
                            onClick={() => changeUnit(false)}
                        >
                            <span className="degree">°</span> C
                        </Button>
                        <Button
                            sx={{ mr: 2 }}
                            disabled={unitMode}
                            variant="outlined"
                            color="inherit"
                            onClick={() => changeUnit(true)}
                        >
                            <span className="degree">°</span> F
                        </Button>
                    </Box>
                    <AddCityModal />
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
            <Toolbar />
        </>
    )
}
export default AppBarComponent
