import React,{useEffect, useState} from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './WishListStyles.scss';
import {  useSelector,useDispatch } from 'react-redux'
import { removeFavItems } from '../../features/wishList/WishListSlice';


const WishList = () => {
const dispatch = useDispatch()

const wishListArray = useSelector((state) => state.wishList);

// const a = useSelector((state) => state.wishList)
// console.log(a)
// console.log(wishListArray)
  return (
    <div className="wishListData">
      <div className="cards-wrapper">
        { wishListArray.map((e) => {
          return(
            <div className="best-selling-cards" key={e.id}>
            <Card>
              <div className="images-section">
                <img src={e.productImg} alt="" />
                <div className="add-to-cart">Add to cart</div>
                {e.discount && <span className="discount">{e.discount}</span>}
                <div className="fav-icons">
                  <div>
                    <DeleteOutlineIcon onClick={()=>dispatch(removeFavItems(e.id))} sx={{ fontSize: "30px" }} className='deleteIcon'/>
                  </div>
                 
                </div>
              </div>
              <CardContent style={{ padding: "12px" }}>
                <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: "600" }}>
                  {e.productName}
                </Typography>
                <div style={{ display: "flex", gap: "12px" }}>
                  <Typography color="#DB4444" sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {e.currentPrice}
                  </Typography>
                  {e.previousPrice && (
                    <Typography color="text.secondary" sx={{ textDecoration: "line-through", fontSize: "16px" }}>
                      {e.previousPrice}
                    </Typography>
                  )}
                </div>
                <div className="star-ratings">
                  <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                    <Rating
                      name="text-feedback"
                      value={e.ratings}
                      readOnly
                      precision={0.5}
                      style={{ fontSize: "28px" }}
                      emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: "28px" }} />}
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default WishList;
