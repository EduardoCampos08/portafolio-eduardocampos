import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './App.css'

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.createRoot(document.getElementById('root')).render(
  isDev ? <App /> : <React.StrictMode><App /></React.StrictMode>
);

