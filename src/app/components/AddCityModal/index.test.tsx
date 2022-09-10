import { renderWithProviders } from '../../helpers/test-utils'
import { MemoryRouter } from 'react-router-dom'
import AppBarComponent from '../AppBar'
import React from 'react'

describe('testing modal', () => {
    it('should renderer', function () {
        const { queryAllByLabelText } = renderWithProviders(
            <MemoryRouter>
                <AppBarComponent />
            </MemoryRouter>
        )
        expect(queryAllByLabelText('City name')).toBeTruthy()
    })
})
