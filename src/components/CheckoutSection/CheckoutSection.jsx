import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutHeader from "../CheckoutHeader/CheckoutHeader";
import CheckoutProductCard from "../CheckoutProductCard/CheckoutProductCard";
import ProductCardMini from "../ProductCardMini/ProductCardMini";

const CheckoutSection = () => {
  return (
    <div>
      <CheckoutHeader />
      <div className="flex justify-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2   bg-white w-screen">
          {/* <div className=""> */}
          <CheckoutForm />
          {/* </div> */}
          <div className="hidden lg:flex justify-start border-s border-black flex-col  bg-gray-200 ps-8 pt-8">
            <div className="w-5/6 xl:w-4/5 2xl:w-2/3">
              <div className=" col-span-1       ">
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
              </div>
              <div className="flex justify-between items-center  ">
                <p className="font-semibold text-xl m-3 ">Total</p>

                <p className="font-semibold text-xl my-3">
                  <span className="text-gray-600 text-xs mx-2">PKR</span>Rs.
                  6,850.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
