import {   PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

type item={
  id:number,
  image_url:string,
  name:string,
  price:number,
  quantity:number,
}

type cart={
  total:number,
  items:item[],
  loading?:boolean
}

const initialState:cart = {
  total:0,
  items:[],
  loading:false
};

type cartProduct={
  id:number,
  quantity:number
}

export const addToCart = createAsyncThunk("cart/addProduct", async (product:cartProduct) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/cart/add`,product);

    if(data.status==="success"){
      toast.success(data.message)
    }
    
    return data.data;
    
  } catch (err) {
    if(axios.isAxiosError(err)){
      toast.error(err.response?.data.message)
    }
    console.log(err);
    return err;
  }
});

export const getCartProducts = createAsyncThunk ("cart/getCartProducts", async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart/get`);
    
    const cartItems=[...data.data];

    const total=cartItems.reduce((cur,acc)=>{
      return cur+(acc.price*acc.cart_products.quantity)
    },0)
    
    return {total,items:cartItems} as cart;

  } catch (err) {
    console.log(err);
    return null;
  }
});


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart(state, action) {
      state.total=0;
      state.items=[]
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.items = [...state.items,action.payload]
      state.total=state.total+action.payload.price;
      state.loading = false;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      console.log(action.error.message);
    });
   
    builder.addCase(getCartProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartProducts.fulfilled, (state, action:PayloadAction<cart|null>) => {
      if(action.payload){
        state.items=action.payload.items;
        state.total=action.payload.total;
        state.loading = false;
      }
    });
    builder.addCase(getCartProducts.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },

});


export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;