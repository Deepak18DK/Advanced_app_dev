import React from 'react'
import Navbar from '../components/Public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'

const Weblayout = () => {
  return (
    <div>
        <Navbar/>
        <div><Outlet/></div>
        <Footer/>
    </div>
  )
}

export default Weblayout