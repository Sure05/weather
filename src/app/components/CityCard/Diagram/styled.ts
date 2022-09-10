import { Box, styled } from '@mui/material'

export const StyledTime = styled('div')`
    position: absolute;
    top: 100%;
    width: 50px;
    text-align: center;
`

export const StyledColumn = styled('div')`
    position: relative;
    width: 150px;
`
interface WidthProps {
    readonly width: string
}

export const StyledBox = styled(Box)<WidthProps>`
    touch-action: auto;
    flex-grow: 1;
    display: flex;
    overflow: hidden;
    padding-bottom: 25px;
    margin: 10px;
    height: 65vh;
    width: ${(props) => props.width};
`

export const StyledBoxContainer = styled('div')`
    overflow-x: auto;
    touch-action: auto;
    border: 1px solid gray;
    border-radius: 20px;
    margin: 10px;
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
        display: none;
    }
`
