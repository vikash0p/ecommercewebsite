import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import { selectAllTheme } from './features/ModeSlice'
import SingleProduct from './components/SingleProduct'

import { FadeLoader } from 'react-spinners'
import { useState } from 'react'
import { useEffect } from 'react'




const App = () => {
 const[loading, setLoading]=useState(false);
 const [color,setColor]=useState("")
 const theme= useSelector(selectAllTheme)
 useEffect(()=>{
  setColor("orange");
  setLoading(true);
  setTimeout(()=>{
    setLoading(false)
  },8000)
 },[])
  return (
    <>
      {
        loading ?
        <>
            <div className="loader bg-light" c>
            <FadeLoader color={color} loading={loading} size={150} aria-label="loading spinner" data-tested="loader" />
            </div>
        </>
        :
        <>
         <div style={{background:theme?"#FFFCDC":"#50707C",color:theme?"":"white"}}>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exect path="/" element={<Home/>} />
            <Route exect path="/product" element={<Product/>} />
            <Route exect path="/product/:paramId" element={<SingleProduct/>} />
            <Route exect path="/blog" element={<Blog/>} />
            <Route exect path="/about" element={<About/>} />
            <Route exect path="/contact" element={<Contact/>} />
            <Route exect path="/cart" element={<Cart/>} />
            <Route exect path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
          </BrowserRouter>
        </div>
        </>
      }
      
      
      
    
       
    </>
  )
}

export default App