import React from 'react'
import Home from "./pages/Home"
import EquipLavieen from "./pages/TelaLavieen"
import BlogLavieen from "./pages/BlogLavieen"
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Lavieen' element={<EquipLavieen />}></Route>
            <Route path='/BlogLavieen' element={<BlogLavieen />}></Route>
        </Routes>
    </Router>
  )
}

export default Rotas