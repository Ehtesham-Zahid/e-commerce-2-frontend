import { useEffect } from "react";
import Lottie from "lottie-react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/shadcn-components/ui/button";

import {
  createOrderAuth,
  createOrderUnAuth,
} from "@/store/features/order/orderSlice";

import BgAnimation from "../../assets/Lotties/congrat-bg.json";
import SuccessAnimation from "../../assets/Lotties/success.json";

const OrderSuccessSection = () => {
  // ----------VARIABLES DECLARATION-----------
  const location = useLocation();
  const dispatch = useDispatch();
  const session_id = new URLSearchParams(location.search).get("session_id");

  // -------USE EFFECTS----------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const createOrder = async () => {
      const orderData = JSON.parse(localStorage.getItem("orderData"));

      if (orderData && session_id) {
        const { paymentMethod, addressId, addressDetails, totalPrice, token } =
          orderData;

        const data = token
          ? {
              paymentMethod,
              addressId,
              totalPrice,
            }
          : {
              paymentMethod,
              addressDetails,
              totalPrice,
            };

        try {
          token
            ? dispatch(createOrderAuth(data)).then((result) =>
                result.meta.requestStatus === "fulfilled"
                  ? localStorage.removeItem("orderData")
                  : null
              )
            : dispatch(createOrderUnAuth(data)).then((result) =>
                result.meta.requestStatus === "fulfilled"
                  ? localStorage.removeItem("orderData")
                  : null
              );
        } catch (error) {
          console.error("Error creating order:", error);
        }
      }
    };

    if (session_id) {
      createOrder();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Lottie
        animationData={BgAnimation}
        loop={false}
        className="w-screen h-screen"
      />
      <div className="absolute top-52 w-screen ">
        <div className="flex justify-center flex-col items-center">
          <Lottie animationData={SuccessAnimation} className="w-52 sm:w-64" />
          <p className="text-2xl font-semibold">
            Your order has been confirmed!
          </p>
          <p className=" ">You will soon receive a confirmation email.</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 mt-5">
            <Link to="/">CONTINUE SHOPPING</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessSection;
