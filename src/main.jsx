import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './components/CartProvider .jsx'

import './index.css'


createRoot(document.getElementById('root')).render(
< CartProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </CartProvider>

)
