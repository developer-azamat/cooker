import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChangeThemContext } from './components/context/ChangeThemContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChangeThemContext>
    <App />
  </ChangeThemContext>,
)
