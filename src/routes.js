import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './pages/App'


const Rotas = () => {
  return (
    <HashRouter basename='/'>
        <Routes>
            <Route path='/' element={<App />} exact />
        </Routes>
    </HashRouter>
  )
}

export default Rotas