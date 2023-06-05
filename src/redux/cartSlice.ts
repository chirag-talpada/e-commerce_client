import {  createSlice } from "@reduxjs/toolkit";



const initialState = [
    {id:1,name:'shoes1',quantity:2},
    {id:2,name:'shoes2',quantity:1},
    {id:3,name:'shoes3',quantity:5}
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

});

//export const {  } = usersSlice.actions;
export default cartSlice.reducer;