import { HashRouter } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider, { StoreContext } from './context/StoreContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
 <BrowserRouter>
 <StoreContextProvider>
 <App />
 </StoreContextProvider>

 </BrowserRouter>
 </HashRouter>
 
)
