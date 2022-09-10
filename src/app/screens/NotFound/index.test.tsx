import { renderWithProviders } from '../../helpers/test-utils'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import NotFound from './index'

describe('test NotFound screen', () => {
    it('should renderer', function () {
        const { queryAllByText } = renderWithProviders(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        )
        expect(queryAllByText('This page could')).toBeTruthy()
    })
})
