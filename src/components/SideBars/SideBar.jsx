import React from 'react'
import './sideBarStyles.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SideBar = () => {
  const sideBarData = [
    {
      id:"sidebar-1",
      lable:"woman's fashion",
      name: "Woman's Fashion",
      dropdown:true,
    },
    {
      id:"sidebar-2",
      lable:"Men’s Fashion",
      name: "Men’s Fashion",
      dropdown:true,
    },
    {
      id:"sidebar-3",
      lable:"Electronics",
      name: "Electronics",
      dropdown:false,
    },
    {
      id:"sidebar-4",
      lable:"Home & LifestyleMedicine",
      name: "Home & LifestyleMedicine",
      dropdown:false,
    },
    {
      id:"sidebar-5",
      lable:"Medicine",
      name: "Medicine",
      dropdown:false,
    },
    {
      id:"sidebar-6",
      lable:"Sports & Outdoor",
      name: "Sports & Outdoor",
      dropdown:false,
    },
    {
      id:"sidebar-7",
      lable:"Baby’s & Toys",
      name: "Baby’s & Toys",
      dropdown:false,
    },
    {
      id:"sidebar-8",
      lable:"Groceries & Pets",
      name: "Groceries & Pets",
      dropdown:false,
    },
    {
      id:"sidebar-9",
      lable:"Health & Beauty",
      name: "Health & Beauty",
      dropdown:false,
    },
  ]
  return (
    <div className='sideBars-menu'>
      {sideBarData.map((e,i)=>{
        return(
          <div className='side-bar-items' key={i}>
            <p>{e.name}</p>
            {e.dropdown && <ChevronRightIcon/>}
            
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
