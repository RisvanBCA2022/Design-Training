import { useState } from 'react'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup1 from './pages/Signup1'
import Signup2 from './pages/Signup2'
import Signup3 from './pages/Signup3'
import BlogHome from './pages/BlogHome'
import Inputinfinite from './components/Infiite Scrolling/Inputinfinite'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup1' element={<Signup1 />} />
        <Route path='/signup2' element={<Signup2 />} />
        <Route path='/signup3' element={<Signup3 />} />
        <Route path='/bloghome' element={<BlogHome />} />
        <Route path='/infinitescroll' element={<Inputinfinite />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
