import axios from 'axios'

const URL = process.env.NODE_ENV === "production" ? import.meta.env.VITE_BACKEND_URL: 'http://localhost:8000';

const farmApi = axios.create({
    baseURL: `${URL}/farms/api/v1/farms`,
});

export const getAllFarms = () => farmApi.get('/');

export const getFarm = (id) => farmApi.get(`/${id}/`);

export const createFarm = (farm) => farmApi.post('/', farm);

export const deleteFarm = (id) => farmApi.delete(`/${id}`);

export const updateFarm = (id, farm) => farmApi.put(`/${id}/`, farm);