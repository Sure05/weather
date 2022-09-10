import { renderWithProviders } from '../../helpers/test-utils'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import Card from './index'
import { setupStore } from '../../store'
import { fetchWeather } from '../../store/WeatherSlice'

describe('test card', () => {
    const data = {
        lat: 46.4873,
        lon: 30.7393,
        country: 'UA',
        state: 'string',
        name: 'Odessa',
        id: 'idaasfasf',
    }

    it('should renderer', function () {
        const { queryAllByText } = renderWithProviders(
            <MemoryRouter>
                <Card cityInfo={data} />
            </MemoryRouter>
        )
        expect(queryAllByText('Odessa')).toBeTruthy()
    })

    it('should fetch weather for city', function () {
        const store = setupStore()
        store.dispatch(fetchWeather(data))

        const { queryAllByText } = renderWithProviders(
            <MemoryRouter>
                <Card cityInfo={data} />
            </MemoryRouter>,
            { store }
        )
        expect(queryAllByText('° C')).toBeTruthy()
    })
})
