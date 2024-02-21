import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StateContext from './context/StateContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
)
