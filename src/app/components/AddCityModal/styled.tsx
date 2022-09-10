import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    border-radius: 7px;
    background-color: ${(props) => props.theme.palette.background.default};
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%),
        0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    padding: 32px;
`
