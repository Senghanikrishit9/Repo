import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Concant from './pages/Concant'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/about' element={<About />}/>
        <Route  path='/concant' element ={<Concant />}/> 
        <Route  path='/Product' element = {<Product />}/>

        <Route path='*' element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
