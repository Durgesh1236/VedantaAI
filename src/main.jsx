// import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/content.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
) 
