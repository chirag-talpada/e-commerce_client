import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductCard from "./ProductCard";

const Products = () => {
  const { product } = useSelector((state: RootState) => {
    return state;
  });

  return (
    <div className="p-5 px-14 pr-0 overflow-x-auto min-h-screen bg-slate-200">
      {product &&
        Object.keys(product.data).map((category, _index) => {
          return (
            <div className="category-items" key={_index}>
              <div className="text-2xl font-bold text-left p-5 pl-4 flex items-center justify-between">
                <div>{category}</div>
                <button className="text-base font-medium text-blue-500 bg-blue-300 px-3 py-1 rounded-2xl">
                  See all
                </button>
              </div>
              <div className="items-list overflow-auto whitespace-pre product-container">
                {product.data[category].map((data, index) => {
                  return (
                    <ProductCard
                      img={data.image_url}
                      name={data.name}
                      price={data.price}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
