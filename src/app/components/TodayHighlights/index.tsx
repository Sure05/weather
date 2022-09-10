import { Box, Grid } from '@mui/material'
import {
    SolarPowerRounded,
    NorthWestRounded,
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    OpacityOutlined,
    TireRepair,
    Visibility,
} from '@mui/icons-material'
import React from 'react'
import { CurrentWeather } from '../../types'
import {
    StyledBox,
    StyledFlexBox,
    StyledText,
    StyledTitle,
    StyledTypographyTitle,
} from './styled'

interface TodayHighlightsProps {
    info: CurrentWeather
}

const TodayHighlights: React.FC<TodayHighlightsProps> = ({ info }) => {
    return (
        <Box sx={{ mb: 5 }}>
            <StyledTypographyTitle variant="h3">
                Today Highlights
            </StyledTypographyTitle>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4} xl={3}>
                    <StyledBox>
                        <StyledTitle>UV Index</StyledTitle>
                        <StyledFlexBox>
                            <span className="result-uv">
                                <SolarPowerRounded />
                            </span>
                            <StyledText>
                                <span>{Math.round(info.uvi)}</span>
                            </StyledText>
                        </StyledFlexBox>
                    </StyledBox>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={3}>
                    <StyledBox>
                        <StyledTitle>Wind Status</StyledTitle>
                        <StyledText>
                            <span>{info.wind_speed}</span> km/s
                        </StyledText>
                        <StyledFlexBox>
                            <div className="icon-ssw">
                                <NorthWestRounded />
                            </div>
                            SSW
                        </StyledFlexBox>
                    </StyledBox>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={3}>
                    <StyledBox>
                        <StyledTitle>Sunrise & Sunset</StyledTitle>
                        <StyledFlexBox className="sunrise icon">
                            <span>
                                <ArrowUpwardOutlined />
                            </span>
                            {new Date(info.sunrise * 1000).toLocaleString(
                                'en-US',
                                {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                }
                            )}
                        </StyledFlexBox>
                        <StyledFlexBox className="sunset icon">
                            <span>
                                <ArrowDownwardOutlined />
                            </span>
                            {new Date(info.sunset * 1000).toLocaleString(
                                'en-US',
                                {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                }
                            )}
                        </StyledFlexBox>
                    </StyledBox>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={3}>
                    <StyledBox>
                        <StyledTitle>Humidity</StyledTitle>
                        <StyledFlexBox>
                            <span className="icon-h">
                                <OpacityOutlined />
                            </span>
                            <StyledText>
                                <span>{info.humidity}</span>%
                            </StyledText>
                        </StyledFlexBox>
                    </StyledBox>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={3}>
                    <StyledBox>
                        <StyledTitle>Pressure</StyledTitle>
                        <StyledFlexBox>
                            <span className="icon-p">
                                <TireRepair />
                            </span>
                            <StyledText>
                                <span>{info.pressure}</span>hPa{' '}
                            </StyledText>
                        </StyledFlexBox>
                    </StyledBox>
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={3}>
                    <StyledBox>
                        <StyledTitle>Visibility</StyledTitle>
                        <StyledFlexBox>
                            <span className="icon-v">
                                <Visibility />
                            </span>
                            <StyledText>
                                <span>
                                    {(info.visibility / 1000).toFixed(1)}
                                </span>
                                km{' '}
                            </StyledText>
                        </StyledFlexBox>
                    </StyledBox>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TodayHighlights
