import Lottie from "lottie-react";
import BgAnimation from "../../assets/Lotties/congrat-bg.json";
import SuccessAnimation from "../../assets/Lotties/success.json";
import { Button } from "@/shadcn-components/ui/button";
import { Link } from "react-router-dom";

const OrderSuccessSection = () => {
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
