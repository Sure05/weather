import React from 'react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from './app/helpers/test-utils'

describe('renders learn react link', () => {
    it('render App', () => {
        const { queryAllByAltText } = renderWithProviders(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
    })
})
