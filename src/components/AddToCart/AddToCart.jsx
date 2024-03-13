
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './AddToCartStyles.scss'
import {useSelector} from 'react-redux'

const AddToCart = () => {
const AddToCartData = useSelector((state)=>state.addToCart)
console.log(AddToCartData)

  return (
    <div className='addToCartContainer'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Quantity</TableCell>
            <TableCell >Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {AddToCartData.map((data)=>{
          return(
            <TableRow key={data.id}>
            <TableCell>{data.productName}</TableCell>
            <TableCell>{data.currentPrice}</TableCell>
            <TableCell><input type="number" name="" id="" style={{width:"40px"}}/></TableCell>
            <TableCell>0</TableCell>

            </TableRow>
          )

         })}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default AddToCart
