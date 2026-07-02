import axios from 'axios';

// Fetch data from -> Backend

// Base API
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Interceptors
api.interceptors.request.use((config) => {
    //Set at localstorage
    const token = localStorage.getItem('token');
    if (token) {
        // Get
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
