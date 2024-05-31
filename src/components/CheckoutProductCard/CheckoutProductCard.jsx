import CardImage from "../../assets/Images/Products/product-1.webp";

const CheckoutProductCard = () => {
  return (
    <div className="flex items-center justify-between my-2   p-2">
      <div className="flex">
        <div className="indicator">
          <span className="indicator-item badge badge-neutral rounded-full">
            1
          </span>
          <img className="w-16 h-16 rounded-lg me-1" src={CardImage} />
        </div>

        <div>
          <p className="text-sm md:text-base mx-2 mt-2">
            Cloud Feel Muscle Tee
          </p>
          <p className="text-xs font-semibold text-gray-600 mx-2 ">XL</p>
        </div>
      </div>
      <p className="  text-sm md:text-base  ">Rs. 2,500</p>
    </div>
  );
};

export default CheckoutProductCard;
