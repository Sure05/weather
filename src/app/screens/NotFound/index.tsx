import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { StyledImage } from './styled'

const NotFound: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} sm={6}>
                    <StyledImage src="https://i.imgur.com/qIufhof.png" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" textAlign="center">
                        This page could
                    </Typography>
                    <Typography variant="h4" textAlign="center">
                        not be found
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NotFound
