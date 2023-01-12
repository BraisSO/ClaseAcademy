import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/*Esto ejecuta el DOM virtual y el real, por eso se repiten algunas funciones cuando se ejecutan*/}
    <App />
  </React.StrictMode>,
)
