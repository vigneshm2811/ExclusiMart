import React, { useState } from "react";
import "./FlashSalesStyles.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import gamepad from "../../assets/images/gamepad.png";
import keyboard from "../../assets/images/keyboard.png";
import monitor from "../../assets/images/monitor.png";
import chair from "../../assets/images/chair.png";

const FlashSales = () => {
  const [clickedButtons, setClickedButtons] = useState(
    Array.from({ length: 5 }, () => false)
  ); // Array to track the clicked state of wish buttons

  const [wishListArray,setWishListArray] = useState([])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const FlashSalesProductdata = [
    {
      id: "product-1",
      productName: "HAVIT HV-G92 Gamepad",
      productImg: gamepad,
      currentPrice: "$120",
      previousPrice: "$160",
      discount: "-40%",
      ratings: 5,
      totalRates: 88,
    },
    {
      id: "product-2",
      productName: "AK-900 Wired Keyboard",
      productImg: keyboard,
      currentPrice: "$960",
      previousPrice: "$1160",
      discount: "-35%",
      ratings: 4,
      totalRates: 75,
    },
    {
      id: "product-3",
      productName: "IPS LCD Gaming Monitor",
      productImg: monitor,
      currentPrice: "$370",
      previousPrice: "$400",
      discount: "-30%",
      ratings: 3.7,
      totalRates: 99,
    },
    {
      id: "product-4",
      productName: "S-Series Comfort Chair ",
      productImg: chair,
      currentPrice: "$375",
      previousPrice: "$400",
      discount: "-25%",
      ratings: 4.5,
      totalRates: 99,
    },
    {
      id: "product-5",
      productName: "S-Series Comfort Chair ",
      productImg: chair,
      currentPrice: "$375",
      previousPrice: "$400",
      discount: "-35%",
      ratings: 4.6,
      totalRates: 99,
    },
  ];

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button className={currentSlide === 0 ? "disable" : ""} onClick={previous}>
          <ArrowBackIcon />
        </button>
        <button onClick={next}>
          <ArrowForwardIcon />
        </button>
      </div>
    );
  };

  const addToWish = (index) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = !newClickedButtons[index]; // Toggle the boolean value
    setClickedButtons(newClickedButtons);

    if (!clickedButtons[index]) {
      // If the button is clicked (added to wish list), add the item to the wish list array
      setWishListArray((prevWishList) => [...prevWishList, FlashSalesProductdata[index]]);
    } else {
      // If the button is unclicked (removed from wish list), remove the item from the wish list array
      setWishListArray((prevWishList) =>
        prevWishList.filter((item) => item.id !== FlashSalesProductdata[index].id)
      );
    }
    console.log("whishdata", wishListArray)

  };

  return (
    <div className="flash-Sales-products">
      <h1>Flash Sales</h1>
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup />}
      >
        {FlashSalesProductdata.map((e, i) => (
          <div className="flash-Sales-cards" key={e.id}>
            <Card sx={{ maxWidth: 345 }}>
              <div className="images-section">
                <img src={e.productImg} alt="" />
                <div className="add-to-cart">Add to cart</div>
                {e.discount && <span className="discount">{e.discount}</span>}
                <div className="fav-icons">
                  <div>
                    <FavoriteBorderOutlinedIcon
                      onClick={() => addToWish(i)}
                      sx={{
                        fontSize: "30px",
                        color: clickedButtons[i] ? "red" : "inherit",
                      }}
                    />{" "}
                  </div>
                  <div>
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
              <CardContent style={{ padding: "12px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                >
                  {e.productName}
                </Typography>
                <div style={{ display: "flex", gap: "12px" }}>
                  <Typography
                    color="#DB4444"
                    sx={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    {e.currentPrice}
                  </Typography>
                  {e.previousPrice && (
                    <Typography
                      color="text.secondary"
                      sx={{ textDecoration: "line-through", fontSize: "16px" }}
                    >
                      {e.previousPrice}
                    </Typography>
                  )}
                </div>
                <div className="star-ratings">
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={e.ratings}
                      readOnly
                      precision={0.5}
                      style={{ fontSize: "28px" }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55, fontSize: "28px" }}
                        />
                      }
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        ))}
      </Carousel>

      
    </div>
  );
};

export default FlashSales;
