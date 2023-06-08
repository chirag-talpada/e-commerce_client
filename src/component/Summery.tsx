import React, { useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

type addressType = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  pincode: number;
};

const Summery = () => {
  const [address, setAddress] = useState<addressType>();
  const [user] = useState(
    JSON.parse(localStorage.getItem("userData") as string)
  );

  const location = useLocation();
  const navigate = useNavigate();

  const { cart } = useSelector((state: RootState) => {
    return state;
  });

  useEffect(() => {
    if (!location.state?.isCheckout || !location.state?.isAddressProvided) {
      navigate("/");
    }
    setAddress(location.state.data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state?.isAddressProvided, location.state?.isCheckout, navigate]);

  return (
    <div className="display-box rounded-md p-7 m-5 mt-8">
      <div className="uppercase font-medium text-lg border-b-2 pb-3">
        Order Summary
      </div>
      <div className="mt-8 pl-5 flex justify-start gap-10">
        <div>
          <div className="text-left"> Delivery Address :</div>
          <table className="user-table">
            <tbody>
              <tr>
                <td>Address line 1</td>
                <td>: {address?.address1}</td>
              </tr>
              {address?.address2 !== "" && (
                <tr>
                  <td>Address line 2</td>
                  <td>{`: ${address?.address2}`}</td>
                </tr>
              )}
              <tr>
                <td>Country</td>
                <td>: {address?.country}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>: {address?.city}</td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>: {address?.pincode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="text-left">Customer Details :</div>
          <table className="user-table mb-5">
            <tbody>
              <tr>
                <td>Name</td>
                <td>: {user?.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{`: ${user?.email}`}</td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>: {user?.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* products */}
      <div className="mt-8 pl-5">
        <div className="font-medium mb-4">Order items</div>

        {cart.items &&
          cart.items.map((item) => {
            return (
              <div className="flex bg-gray-300 rounded-md h-36 p-4 mb-3">
                <div className="w-48">
                  <img
                    className="h-full w-full object-contain"
                    src={item.image_url}
                    alt="product"
                  />
                </div>
                <div>
                  <div className="font-medium">
                    {item.name}
                  </div>
                  <div className="text-left">
                    <div>Qty : {item.cart_products.quantity}</div>
                    <div className="flex items-center">
                      Price : {item.price*item.cart_products.quantity} <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>



    </div>
  );
};

export default Summery;
