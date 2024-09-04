// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/v1/auth/';

const register = async (userData) => {
    
    const response = await axios.post(API_URL + 'users/', userData);
    return response.data;
};

export default {
    register,
};
