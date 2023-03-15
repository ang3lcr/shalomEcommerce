import { useState, useEffect } from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Products from './pages/Products'



function App() {

  return (
  <HashRouter>
    <NavBar />
       <Routes>
      <Route path="/" element={<Home />}/>
       </Routes>
  </HashRouter>
  )
}

export default App