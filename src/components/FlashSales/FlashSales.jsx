import React from 'react'
import './FlashSalesStyles.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gamepad from '../../assets/images/gamepad.png'
import keyboard from '../../assets/images/keyboard.png'
import monitor from '../../assets/images/monitor.png'
import chair from '../../assets/images/chair.png'




const FlashSales = () => {
    const value = 3.5;

 const FlashSalesProductdata = [{
    id:"product-1",
    productName:"HAVIT HV-G92 Gamepad",
    productImg:gamepad,
    currentPrice:"$120",
    previousPrice:"$160",
    discount:"-40%",
    ratings:5,
    totalRates:88
 },
 {
    id:"product-2",
    productName:"AK-900 Wired Keyboard",
    productImg:keyboard,
    currentPrice:"$960",
    previousPrice:"$1160",
    discount:"-35%",
    ratings:4,
    totalRates:75
 },
 {
    id:"product-3",
    productName:"IPS LCD Gaming Monitor",
    productImg:monitor,
    currentPrice:"$370",
    previousPrice:"$400",
    discount:"-30%",
    ratings:3.7,
    totalRates:99
 },
 {
    id:"product-4",
    productName:"S-Series Comfort Chair ",
    productImg:chair,
    currentPrice:"$375",
    previousPrice:"$400",
    discount:"-25%",
    ratings:4.5,
    totalRates:99
 },
 {
    id:"product-4",
    productName:"S-Series Comfort Chair ",
    productImg:chair,
    currentPrice:"$375",
    previousPrice:"$400",
    discount:"-25%",
    ratings:4.5,
    totalRates:99
 },
]
  return (
    <div className='flash-Sales-products'>
     {FlashSalesProductdata.map((e)=>{
        return(
            <Card sx={{ maxWidth: 345}} className='flash-Sales-cards'>
            <div className='images-section'>
                  <img src={e.productImg} alt="" />
                  <div className='add-to-cart'>Add to cart</div>
                  <span className='discount'>{e.discount}</span>
                  <div className='fav-icons'>
                     <div><FavoriteBorderOutlinedIcon  sx={{fontSize:"30px"}}/> </div>
                     <div><RemoveRedEyeOutlinedIcon sx={{fontSize:"30px"}}/></div>
                  </div>
              </div>
            <CardContent style={{padding:"12px"}}>
           
              <Typography gutterBottom  sx={{ fontSize:"18px",fontWeight:"600"}}>
             {e.productName}
              </Typography>
              <div style={{display:"flex", gap:"12px"}}>
              <Typography  color="#DB4444" sx={{ fontSize:"16px",fontWeight:"600"}}>
              {e.currentPrice}
              </Typography>
              <Typography  color="text.secondary" sx={{textDecoration:"line-through", fontSize:"16px"}}>
              {e.previousPrice}
              </Typography>
              </div>
      
              <div className='star-ratings'>
              <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="text-feedback"
                
              value={e.ratings}
              readOnly
              precision={0.5}
              style={{fontSize:"28px"}}
              emptyIcon={<StarIcon style={{ opacity: 0.55,fontSize:"28px" }}  />}
            />
      
          </Box>
      
              </div>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        )
     })}
    </div>
  )
}

export default FlashSales
