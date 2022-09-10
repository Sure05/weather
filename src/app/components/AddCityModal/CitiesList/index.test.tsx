import { render } from '@testing-library/react'
import CitiesList from './index'

describe('test render CitiesList', () => {
    const data = [
        {
            lat: 111,
            lon: 222,
            country: 'UA',
            state: 'string',
            name: 'Odessa',
            id: 'idaasfasf',
        },
    ]
    const loading = false
    const selectCity = () =>
        void it('should renderer list', function () {
            const { queryAllByText } = render(
                <CitiesList
                    loading={loading}
                    data={data}
                    selectCity={selectCity}
                />
            )
            expect(queryAllByText('/Odessa/*')).toBeTruthy()
        })
})
