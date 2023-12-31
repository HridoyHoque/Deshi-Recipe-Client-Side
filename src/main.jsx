import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './components/routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './components/Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
)
