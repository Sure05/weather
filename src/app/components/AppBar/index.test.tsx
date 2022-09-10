import { MemoryRouter } from 'react-router-dom'
import AppBarComponent from './index'
import { renderWithProviders } from '../../helpers/test-utils'
import React from 'react'

it('Renderer AppBarComponent', () => {
    const { queryAllByText } = renderWithProviders(
        <MemoryRouter>
            <AppBarComponent />
        </MemoryRouter>
    )
    expect(queryAllByText(/Weather/i)).toBeTruthy()
})
