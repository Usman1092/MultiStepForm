import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import StepContext from './StepContext.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>
    <StepContext>  <App /> </StepContext>
  </React.StrictMode>
 

);
