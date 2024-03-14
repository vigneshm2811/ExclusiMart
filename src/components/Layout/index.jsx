import React, { useState } from "react";
import "./Layout.scss";
import Notify from "../Notify";
import SideBar from "../SideBars/SideBar";
import Carousel from "../Carousel/Carousel";
import FlashSales from "../FlashSales/FlashSales";
import Button from "@mui/material/Button";
import BestSelling from "../BestSelling/BestSelling";
import Browse from "../browesBycatQ/browse";
import {useDispatch } from 'react-redux'
import {addItemsFav} from "../../features/wishList/WishListSlice"


const PageLayout = () => {
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
          <FlashSales  />
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
          <BestSelling  />
        </div>
      </div>

      {/* <Notify/> */}
            

    </>
  );
};

export default PageLayout;
