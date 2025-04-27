import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './pages/App'
import Thanks from './pages/Thanks'


const Rotas = () => {
  return (
    <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/thanks' element={<Thanks />}/>
        </Routes>
    </HashRouter>
  )
}

export default Rotas