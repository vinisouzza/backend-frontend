// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'; // ajuste o caminho conforme necessário

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Adicione outros reducers aqui, se necessário
  },
});

export default store;
