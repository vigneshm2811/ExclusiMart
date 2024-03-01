import React, { useState } from "react";
import "./Layout.scss";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import SideBar from "../SideBars/SideBar";
import Carousel from "../Carousel/Carousel";
import FlashSales from "../FlashSales/FlashSales";
import Button from "@mui/material/Button";
import BestSelling from "../BestSelling/BestSelling";
import Browse from "../browesBycatQ/browse";
import Notify from "../Notify";

const PageLayout = () => {
  const [wishListArray, setWishListArray] = useState([]);

  // Function to handle adding or removing items from the wishlist
  const handleWishlistToggle = (product) => {
    const index = wishListArray.findIndex((item) => item.id === product.id);
    if (index === -1) {
      // If product not found in wishlist, add it
      setWishListArray([...wishListArray, product]);
    } else {
      // If product found in wishlist, remove it
      const updatedWishlist = [...wishListArray];
      updatedWishlist.splice(index, 1);
      setWishListArray(updatedWishlist);
    }
  };

  return (
    <>
      <div className="page-layout">
        <div className="carosule-Section">
          <SideBar />
          <Carousel />
        </div>
        <div className="flash-sales-section">
          <div className="boxContainer">
            <div className="squareBox"></div>
            <h4>Today's</h4>
          </div>
          <FlashSales onWishlistToggle={handleWishlistToggle} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              style={{
                backgroundColor: "#DB4444",
                fontSize: "14px",
                padding: "8px 24px",
              }}
            >
              View All Products
            </Button>
          </div>
        </div>

        <div className="browse-by-category">
          <div className="boxContainer">
            <div className="squareBox"></div>
            <h4>Categories</h4>
          </div>
          <Browse />
        </div>

        <div className="best-selling-products">
          <div className="boxContainer">
            <div className="squareBox"></div>
            <h4>This Month</h4>
          </div>
          <BestSelling onWishlistToggle={handleWishlistToggle} />
        </div>
      </div>

      {/* <Notify/> */}
            

    </>
  );
};

export default PageLayout;
