import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";

type props={
    img:string,
    name:string,
    price:number
}

const ProductCard = ({img,name,price}:props) => {
  return (
    <div className="item w-60 bg-white p-4 inline-block mr-5 rounded-md shadow-xl">
    <div className="item-image h-60">
      <img
        className="w-full h-full object-contain"
        src={img}
        alt="product"
      />
    </div>
    <div className="p-4">
      <div className="text-sm font-normal whitespace-normal h-10">
        {name.length > 35 ? `${name.slice(0,35)}...`:name}
      </div>
      <div className="item-price flex items-center justify-center mt-3 font-medium">
        {price} <BsCurrencyRupee />
      </div>
      <div className="item-footer">
        <button className="px-5 py-2 border-2 border-blue-700 mt-3 rounded-3xl text-blue-700 hover:bg-blue-700 hover:text-white font-bold">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard