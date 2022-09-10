import {
    Button,
    Card as CardElement,
    CardContent,
    styled,
    Typography,
} from '@mui/material'

export const StyledCardElement = styled(CardElement)(({ theme }) => ({
    borderRadius: '7px',
    boxShadow: `0 0 10px 0 rgba(${
        theme.palette.mode === 'light' ? '196, 196, 196,' : `104, 104, 104,`
    } 1)`,
    fontFamily: 'Roboto, sans-serif',
    position: 'relative',
}))

export const StyledCardContent = styled(CardContent)`
    cursor: pointer;
`

export const StyledDropButton = styled(Button)`
    position: absolute;
    right: 5px;
    min-width: auto;
`

export const StyledCityName = styled(Typography)`
    padding-top: 50px;
    font-size: 26px;
`

export const StyledDate = styled(Typography)`
    font-size: 20px;
    line-height: 40px;
`

export const StyledTemp = styled(Typography)`
    padding-left: 125px;
    padding-top: 6px;
    font-size: 50px;
    @media (max-width: 620px) {
        font-size: 30px;
    }
`
