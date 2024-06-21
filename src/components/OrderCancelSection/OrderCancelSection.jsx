import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import { Button } from "@/shadcn-components/ui/button";

import CancelAnimation from "../../assets/Lotties/cancel.json";

const OrderCancelSection = () => {
  // --------USE EFFECTS-----------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Lottie animationData={CancelAnimation} className="w-52 sm:w-64" />
      <p className="text-2xl font-semibold mt-4">PAYMENT UNSUCCESSFUL!</p>
      <Button className="bg-red-500 hover:bg-red-600 mt-5">
        <Link to="/">CONTINUE SHOPPING</Link>
      </Button>
    </div>
  );
};

export default OrderCancelSection;
