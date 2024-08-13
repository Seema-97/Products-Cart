import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContext from './contexts/MainContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MainContext>
      <App />
    </MainContext>
    </BrowserRouter>
  </StrictMode>,
)
