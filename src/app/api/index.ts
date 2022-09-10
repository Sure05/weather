import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://api.openweathermap.org/',
    timeout: 1000,
    params: {
        appid: '865ca22b3718ecb5576e3c8021b4566b',
    },
})
