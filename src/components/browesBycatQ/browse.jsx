import React from 'react'
import Carousel from "react-multi-carousel";
import './browseStyle.scss'
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import cellPhone from "../../assets/images/Category-CellPhone.png"
import Camera from "../../assets/images/Category-Camera.png"
import Computer from "../../assets/images/Category-Computer.png"
import Gamepad from "../../assets/images/Category-Gamepad.png"
import SmartWatch from "../../assets/images/Category-SmartWatch.png"
import Headphone from "../../assets/images/Category-Headphone.png"

const Browse = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const categoryItemsData =[{
    id:"category-1",
    categroy:"Phones",
    images:cellPhone,
  },
  {
    id:"category-2",
    categroy:"Computers",
    images:Computer,
  },
  {
    id:"category-3",
    categroy:"SmartWatch",
    images:SmartWatch,
  },
  {
    id:"category-4",
    categroy:"Camera",
    images:Camera,
  },
  {
    id:"category-5",
    categroy:"HeadPhones",
    images:Headphone,
  },
  {
    id:"category-6",
    categroy:"Gaming",
    images:Gamepad,
  },

]
  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={previous}>
          <ArrowBackIcon />
        </button>
        <button onClick={next}>
          <ArrowForwardIcon />
        </button>
      </div>
    );
  };

  return (
    <div className='browse-by-category'>
      <h1>Browse By Category</h1>
    <div className='category-cards-container'>
    <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup />}>

         {categoryItemsData.map((e)=>{
          return(
            <div className='category-cards' key={e.id}>
            <img src={e.images} alt="" />
            <p>{e.categroy}</p>
          </div>
          )
         })}
          
        </Carousel>
    </div>

    
    </div>
  )
}

export default Browse
