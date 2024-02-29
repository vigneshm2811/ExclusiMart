import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

const Layouts = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>

      <Footer/>
    </>
  )
}

export default Layouts
