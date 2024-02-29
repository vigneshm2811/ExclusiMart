import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import './WishListStyles.scss'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import bookSelf from "../../assets/images/bookSelf.png";
import bags from "../../assets/images/bags.png";
import GPU from "../../assets/images/GPU.png";
import jacket from "../../assets/images/jacket.png";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";


const WishList = (wishListArray) => {
  const bestSellingProductdata = [
    {
      id: "product-1",
      productName: "The north coat",
      productImg: jacket,
      currentPrice: "$260",
      previousPrice: "$360",
      discount: false,
      ratings: 5,
      totalRates: 65,
    },
    {
      id: "product-2",
      productName: "Gucci duffle bag",
      productImg: bags,
      currentPrice: "$960",
      previousPrice: "$1160",
      discount: false,
      ratings: 4,
      totalRates: 75,
    },
    {
      id: "product-3",
      productName: "RGB liquid CPU Cooler",
      productImg: GPU,
      currentPrice: "$160",
      previousPrice: "$170",
      discount: false,
      ratings: 3.7,
      totalRates: 99,
    },
    {
      id: "product-5",
      productName: "Small BookSelf ",
      productImg: bookSelf,
      currentPrice: "$375",
      previousPrice: false,
      discount: false,
      ratings: 4.6,
      totalRates: 99,
    },
  ];
  return (
    <>
   
  <div className="wishListData">
  <div className="cards-wrapper">
     {bestSellingProductdata.map((e) => {
        return (
          <div className="best-selling-cards" key={e.id}>
            <Card >
              <div className="images-section">
                <img src={e.productImg} alt="" />
                <div className="add-to-cart">Add to cart</div>
                {e.discount &&<span className="discount">{e.discount}</span>}
                <div className="fav-icons">
                  <div>
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px" }} />{" "}
                  </div>
                  <div>
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
              <CardContent style={{ padding: "12px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: "18px", fontWeight: "600" }}>
                  {e.productName}
                </Typography>
                <div style={{ display: "flex", gap: "12px" }}>
                  <Typography
                    color="#DB4444"
                    sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {e.currentPrice}
                  </Typography>
                 {e.previousPrice && <Typography
                    color="text.secondary"
                    sx={{ textDecoration: "line-through", fontSize: "16px" }}>
                    {e.previousPrice}
                  </Typography>}
                </div>
                <div className="star-ratings">
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <Rating
                      name="text-feedback"
                      value={e.ratings}
                      readOnly
                      precision={0.5}
                      style={{ fontSize: "28px" }}
                      emptyIcon={
                        <StarIcon style={{ opacity: 0.55, fontSize: "28px" }} />
                      }
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        );
      })}
     </div>
  </div>
     
    </>
  )
}

export default WishList
