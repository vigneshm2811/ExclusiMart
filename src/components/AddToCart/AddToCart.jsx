import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './AddToCartStyles.scss';
import { useSelector,useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import {removeFromCart} from "../../features/addToCart/cartSlice"
import { Button, TextField } from '@mui/material';


const AddToCart = () => {
  const AddToCartData = useSelector((state) => state.addToCart);
  console.log(AddToCartData);
  const [quantities, setQuantities] = useState({});
  const [totals, setTotals] = useState({});
  const [overAllTotals, setOverAllTotals] = useState({});
  const dispatch = useDispatch()
  useEffect(() => {
    // Calculate total on page load
    let initialTotal = 0;
    AddToCartData.forEach((data) => {
      initialTotal += (quantities[data.id] || 1) * parseInt(data.currentPrice);
    });
    setTotals(initialTotal);
    setOverAllTotals(initialTotal);
  }, []); // Empty dependency array to run this effect only once on page load

  const handleQuantityChange = (id, value, price) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
    updateTotal();
  };

  const updateTotal = () => {
    let updatedTotal = 0;
    AddToCartData.forEach((data) => {
      updatedTotal += (quantities[data.id] || 1) * parseInt(data.currentPrice);
    });
    setTotals(updatedTotal);
    setOverAllTotals(updatedTotal);
  };
  useEffect(() => {
    // Calculate total when quantities change
    updateTotal();
  }, [quantities]); // Watch for changes in quantities

console.log(overAllTotals)
  return (
    <div className='addToCartContainer'>
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell></TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {AddToCartData.map((data) => {
              return (
                <TableRow key={data.id}  sx={{ fontSize:"16px" }} >
                  <TableCell sx={{ fontSize:"16px",display:"flex",alignItems:"center",gap:"20px" }} >
                    <img src={data.productImg} alt="" style={{width:"90px"}}/>
                    <span>{data.productName}</span>
                    </TableCell>
                  <TableCell sx={{ fontSize:"16px" }}>${data.currentPrice}</TableCell>
                  <TableCell sx={{ fontSize:"16px" }}>
                    <input
                      type="number"
                      value={quantities[data.id] || 1}
                      onChange={(e) => handleQuantityChange(data.id, parseInt(e.target.value), parseInt(data.currentPrice))}
                      name=""
                      id=""
                      style={{ width: '40px' }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize:"16px" }}>${(quantities[data.id] || 1) * parseInt(data.currentPrice)}</TableCell>
                  <TableCell><ClearIcon onClick={()=>dispatch(removeFromCart(data.id))} sx={{color:"#db4444",cursor:"pointer"}}/></TableCell>
                </TableRow>
              );
            })}
           
            
          </TableBody>
        </Table>
      </TableContainer>

      <div className='checkout'>
        <div className='coupons'>
          <TextField variant='outlined'/>
          <Button    variant="contained"
              disableElevation
              style={{
                backgroundColor: "#DB4444",
                fontSize: "14px",
                padding: "8px 24px",
              }}  >Apply Coupon</Button>
        </div>
            <div className='cart-total'>
              <h5>Cart Total</h5>
              <TableContainer sx={{ minWidth: 500 }} component={Paper}>
        <Table  aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>
                Subtotal : 
              </TableCell>
              <TableCell>
              {/* ${overAllTotals} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Shipping :
              </TableCell>
              <TableCell>
                Free
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Total :
              </TableCell>
              <TableCell>
              
              </TableCell>
            </TableRow>
           
           
            
          </TableBody>
        </Table>
      </TableContainer>
            </div>
      </div>
    </div>
  );
};

export default AddToCart;
