import { renderWithProviders } from '../../helpers/test-utils'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import Home from './index'

describe('test Home screen', () => {
    it('should renderer', function () {
        const { queryAllByText } = renderWithProviders(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(queryAllByText('Please, add any city to list')).toBeTruthy()
    })
})
