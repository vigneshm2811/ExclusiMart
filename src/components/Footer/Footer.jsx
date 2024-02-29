import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import downloadApp from '../../assets/images/downloadApp.png'
import './FooterStyles.scss'
const Footer = () => {
  return (
    <div className='footer-component'>
      <div className="exclusive">
        <h2>Exclusive</h2>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <TextField
        style={{width:"75%",border:"1px solid white",color:"white"}}
      variant="outlined"
      placeholder="Enter your message"
  
      InputProps={{
        endAdornment: (
          <IconButton>
            <SendIcon sx={{color:"white"}}/>
          </IconButton>
        ),
      }}
    />
      </div>
      <div className="support">
        <h3>Support</h3>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ullam?
        </p>
        <p>lorem@gmail.com</p>
        <p>+91-88888-9999</p>
      </div>
      <div className="account">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="quick-link">
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="dowload-app">
        <h3>Download App</h3>
        <p>Save $3 with App New User Only</p>
        <img src={downloadApp} alt="down" />
      </div>
    </div>
  )
}

export default Footer
