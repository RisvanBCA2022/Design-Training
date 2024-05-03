import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    Home
    <div style={{display:'flex'}}>
    <Link to='/signup1'>Signup page 1</Link>
    <Link to='/signup2'>Signup page 2</Link>

        
    </div>
    </div>
  )
}

export default Home