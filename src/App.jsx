import { useState } from 'react'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup1 from './pages/Signup1'
import Signup2 from './pages/Signup2'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup1' element={<Signup1 />} />
        <Route path='/signup2' element={<Signup2 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
