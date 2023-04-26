import axios from 'axios'

const farmApi = axios.create({
    baseURL: 'http://localhost:8000/farms/api/v1/farms'
})

export const getAllFarms = () => farmApi.get('/')

export const getFarm = (id) => farmApi.get(`/${id}/`)

export const createFarm = (farm) => farmApi.post('/', farm)

export const deleteFarm = (id) => farmApi.delete(`/${id}`)

export const updateFarm = (id, farm) => farmApi.put(`/${id}/`, farm)