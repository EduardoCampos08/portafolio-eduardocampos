import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'; // asegúrate que el archivo se llame App.js o App.jsx
//import './index.css'; // solo si existe este archivo. Si no existe, comenta esta línea

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {isDev ? (
      <App />
    ) : (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )}
  </BrowserRouter>
);

