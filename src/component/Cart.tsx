import React, { MouseEvent } from "react";

type props = {
  onCloseModel: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ onCloseModel }: props) => {
  const closeModel = (e: MouseEvent<HTMLDivElement>) => {
    onCloseModel(false);
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-screen bg-black/70"
      onClick={closeModel}
    >
      <div
        className="bg-white absolute right-0 w-96 h-full text-red-600 text-2xl overflow-auto"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Cart;
