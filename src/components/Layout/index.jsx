import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import SideBar from '../SideBars/SideBar'
import Carousel from '../Carousel/Carousel'
import FlashSales from '../FlashSales/FlashSales'
import CarouselRatio from '../Sample'
import './Layout.scss'
import { Container } from '@mui/material'


const PageLayout = () => {
  return (
    <>
    <Navbar/>
   <div className='page-layout'>
    {/* <div className="carosule-Section">
    <SideBar/>
    <Carousel/>
    </div> */}
    <div className="flash-sales-section">
      <FlashSales/>

<CarouselRatio/>

    </div>
   </div>

  
    <Footer/>
    
    </>
  )
}

export default PageLayout
