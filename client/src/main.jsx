import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Wrapped by AuthProvider */}
        {/* Get all the Localstorage acces */}
        {/* App get all the funtions of AuthProvider, when we wrap with it */}
        <AuthProvider>
            <App />
         </AuthProvider>
    </React.StrictMode>,
)
