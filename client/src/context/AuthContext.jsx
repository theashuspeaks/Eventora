import React, { createContext, useState, useEffect } from 'react';
import api from '../utils/axios';

// Creating AuthProvider
// Set OTP to Token, Remove Token when logout, Localstorage works are here
export const AuthContext = createContext();

// Authprovider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // Loader Logic
    const [loading, setLoading] = useState(true);

    // User
    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setLoading(false);
    }, []);

    // Login
    const login = async (email, password) => {
        try {
            // Using Interceptor(Axios) goes to Backend
            const { data } = await api.post('/auth/login', { email, password });
            setUser(data);
            // Store the Token
            localStorage.setItem('userInfo', JSON.stringify(data));
            localStorage.setItem('token', data.token);
            return data;
        } 
        // When we get error
        catch (error) {
            if (error.response?.data?.needsVerification) throw error.response.data;
            throw error.response?.data?.message || 'Login failed';
        }
    };

    // Register
    // Call at registor endpoint with 3 values
    const register = async (name, email, password) => {
        try {
            const { data } = await api.post('/auth/register', { name, email, password });
            return data; // Returns { message, email }
        } catch (error) {
            throw error.response?.data?.message || 'Registration failed';
        }
    };

    // Verify OTP
    const verifyOTP = async (email, otp) => {
        try {
            const { data } = await api.post('/auth/verify-otp', { email, otp });
            setUser(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            localStorage.setItem('token', data.token);
            return data;
        } catch (error) {
            throw error.response?.data?.message || 'OTP verification failed';
        }
    };

    // Logout
    // Remove the stored data
    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
    };

    return (
        // Kind of storage(in React)
        // Wrap the whole app(in main.jsx)
        <AuthContext.Provider value={{ user, login, register, verifyOTP, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
