import React from 'react'
import './sideBarStyles.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SideBar = () => {
  const sideBarData = [
    {
      id:"sidebar-1",
      label:"woman's fashion",
      name: "Woman's Fashion",
      dropdown:true,
    },
    {
      id:"sidebar-2",
      label:"Men’s Fashion",
      name: "Men’s Fashion",
      dropdown:true,
    },
    {
      id:"sidebar-3",
      label:"Electronics",
      name: "Electronics",
      dropdown:false,
    },
    {
      id:"sidebar-4",
      label:"Home & LifestyleMedicine",
      name: "Home & LifestyleMedicine",
      dropdown:false,
    },
    {
      id:"sidebar-5",
      label:"Medicine",
      name: "Medicine",
      dropdown:false,
    },
    {
      id:"sidebar-6",
      label:"Sports & Outdoor",
      name: "Sports & Outdoor",
      dropdown:false,
    },
    {
      id:"sidebar-7",
      label:"Baby’s & Toys",
      name: "Baby’s & Toys",
      dropdown:false,
    },
    {
      id:"sidebar-8",
      label:"Groceries & Pets",
      name: "Groceries & Pets",
      dropdown:false,
    },
    {
      id:"sidebar-9",
      label:"Health & Beauty",
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
