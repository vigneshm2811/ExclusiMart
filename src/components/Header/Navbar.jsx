import React from "react";
import "./NavbarStyles.scss";
import { Link, NavLink } from "react-router-dom";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-logo">Exclusive Mart</div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="">Contact</NavLink>
          </li>
          <li>
            <NavLink to="">About</NavLink>
          </li>
          <li>
            <NavLink to="">Sign Up</NavLink>
          </li>
        </ul>
      </div>

      <div className="serach-bars">
        <Paper
          component="form"
          sx={{
            padding: "0px",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
          }}>
          <InputBase
            sx={{ ml: 3, flex: 1, fontSize: "20px" }}
            placeholder="What are you looking for?"
            inputProps={{ "aria-label": "" }}
          />
          <IconButton type="button" sx={{ p: "4px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Link to="/wishList">
          <button>
            <FavoriteBorderIcon />
          </button>
        </Link>

        <Link to="/cart">
          <button>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
