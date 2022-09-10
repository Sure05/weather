import { Box, styled } from '@mui/material'

export const StyledWeekElements = styled('div')`
    color: ${(props) => props.theme.palette.primary.main};
    margin-top: 20px;
    display: flex;

    .box_info {
        text-align: center;
        display: flex;
        justify-content: center;
        background: ${(props) => props.theme.palette.background.default};
        color: ${(props) => props.theme.palette.primary.main};
        border-radius: 20px;
        padding: 15px;
        width: 100%;
        font-size: 17px;
        min-height: 140px;
        flex-direction: column;
        box-shadow: 0 0 10px 0
            rgba(
                ${(props) =>
                        props.theme.palette.mode === 'light'
                            ? '196, 196, 196,'
                            : '104, 104, 104,'}
                    1
            );
        margin-right: 15px;
        min-width: 150px;
        .temp_info {
            font-size: 18px;
            font-weight: bold;
        }

        img {
            max-width: 80px;
            @media (max-width: 480px) {
                max-width: 120px;
            }
            width: 100%;
            margin: 10px auto;
        }

        .light-text {
            color: ${(props) => props.theme.palette.primary.light};
        }
    }
`

export const StyledBoxContainer = styled('div')`
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    padding: 15px;
    &::-webkit-scrollbar {
        display: none;
    }
`

interface WidthProps {
    readonly width: string
}

export const StyledBox = styled(Box)<WidthProps>`
    width: ${(props) => props.width};
`
