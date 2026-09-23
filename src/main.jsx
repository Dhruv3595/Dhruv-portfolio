import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Hide the instant-paint HTML shell once React takes over
const shell = document.getElementById('shell')
if (shell) {
  shell.classList.add('shell-hidden')
  setTimeout(() => shell.remove(), 200)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
