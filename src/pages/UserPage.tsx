import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import {AppDispatch} from '../redux/store';
import Products from '../component/Products';

const UserPage = () => {

  const dispatch:AppDispatch =useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);

  return (
    <div>
        <Navbar/>
        <Products/>
    </div>
  )
}

export default UserPage