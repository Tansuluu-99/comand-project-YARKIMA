import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            // Имитация запроса на сервер
            if (email === 'admin@example.com' && password === 'login') {
                return { user: 'Admin', token: 'fake-jwt-token' };
            } else {
                throw new Error('Неправильный логин или пароль');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);