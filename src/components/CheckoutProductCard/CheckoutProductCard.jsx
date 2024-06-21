/* eslint-disable react/prop-types */

const CheckoutProductCard = (props) => {
  return (
    <div className="flex items-center justify-between my-2   p-2">
      <div className="flex">
        <div className="indicator">
          <span className="indicator-item badge badge-neutral rounded-full">
            {props.quantity}
          </span>
          <img className="w-16 h-16 rounded-lg me-1" src={props.image} />
        </div>

        <div>
          <p className="text-sm md:text-base mx-2 mt-2">
            {props.title} ({props.color})
          </p>
          <p className="text-xs font-semibold text-gray-600 mx-2 ">
            {props.selectedSize}
          </p>
        </div>
      </div>
      <p className="  text-sm md:text-base  ">Rs. {props.productPrice}</p>
    </div>
  );
};

export default CheckoutProductCard;
