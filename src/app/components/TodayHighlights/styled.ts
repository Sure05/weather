import { styled, Typography } from '@mui/material'

export const StyledTypographyTitle = styled(Typography)`
    margin-bottom: 25px;
`

export const StyledTitle = styled('span')`
    color: ${(props) => props.theme.palette.primary.light};
    font-size: 15px;
    position: absolute;
    top: 20px;
    left: 20px;
    font-weight: bold;
    @media (min-width: 1700px) {
        font-size: 20px;
    }
`

export const StyledText = styled('div')`
    //line-height: 57px;

    & span {
        font-size: 40px;
        font-weight: bold;
        @media (max-width: 620px) {
            font-size: 30px;
        }
    }
`

export const StyledFlexBox = styled('div')`
    display: flex;
    align-items: center;
`

export const StyledBox = styled('div')`
    position: relative;
    background: ${(props) => props.theme.palette.background.default};
    border-radius: 20px;
    padding: 20px;
    text-align: left;
    font-size: 17px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 170px;
    //margin-bottom: 20px;
    box-shadow: 0 0 10px 0
        rgba(
            ${(props) =>
                    props.theme.palette.mode === 'light'
                        ? '196, 196, 196,'
                        : '104, 104, 104,'}
                1
        );
    @media (min-width: 1700px) {
        max-height: 274px;
    }

    .emoticons {
        font-size: 16px;
    }

    .icon-ssw {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        margin-right: 10px;
        background-color: #4d4df3;
        color: #fff;
        padding: 5px;
        border-radius: 50px;
        font-size: 15px;
    }

    .icon {
        margin: 10px 0;
    }

    .icon span {
        margin-right: 10px;
        background-color: #f9e241;
        border: 2px solid #ffd254;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        padding: 5px;
        color: #fff;
        border-radius: 50px;
        font-size: 15px;
    }

    .sunrise {
        margin-top: 30px;
    }

    .icon-h {
        margin-right: 10px;
        background-color: #27a51f;
        border: 2px solid #1d650b;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        padding: 2px;
        color: #fff;
        border-radius: 50px;
        font-size: 21px;
    }

    .icon-v {
        margin-right: 10px;
        background-color: #8a1fa5;
        border: 2px solid #4c0ba2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        padding: 4px;
        color: #fff;
        border-radius: 50px;
        font-size: 18px;
        @media (max-width: 480px) {
            position: absolute;
            top: 15px;
            right: 8px;
        }
    }

    .result-uv {
        margin-right: 10px;
        background-color: #a5881f;
        border: 2px solid #c5a713;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        padding: 4px;
        color: #fff;
        border-radius: 50px;
        font-size: 18px;
    }

    .icon-p {
        margin-right: 10px;
        background-color: #a51f1f;
        border: 2px solid #a20b0b;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        padding: 2px;
        color: #fff;
        border-radius: 50px;
        font-size: 21px;
        @media (max-width: 480px) {
            position: absolute;
            top: 15px;
            right: 8px;
        }
    }
`
