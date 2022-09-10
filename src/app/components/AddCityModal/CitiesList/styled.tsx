import { Box, styled } from '@mui/material'

export const StyledBlock = styled('div')({
    paddingTop: 10,
})

export const StyledRow = styled(Box)(({ theme }) => ({
    padding: 5,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor:
            theme.palette.mode === 'dark'
                ? theme.palette.grey[900]
                : theme.palette.grey[300],
    },
}))
