import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex  py-4 px-8 items-center bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Krishit coding</h2>
      <div className='flex gap-4 text-white'></div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/Concant'>Concant</Link>
      <Link to='/Product'>Product</Link>
    </div>
  )
}

export default Navbar
