import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PageLayout from './components/Layout/index.jsx'
import Layouts from './pageLayout.jsx'
import WishList from './components/WishList/WishList.jsx'
import AddToCart from './components/AddToCart/AddToCart.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts/>}>
      <Route path='' element={<PageLayout/>}/>
      <Route path='/wishList' element={<WishList/>}/>
      <Route path='/cart' element={<AddToCart/>}/>

      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
