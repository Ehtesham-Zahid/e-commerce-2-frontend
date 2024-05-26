import CardImage from "../../assets/Images/Products/product-1.webp";

const ProductCardMini = () => {
  return (
    <div className="flex items-center justify-start my-2">
      <img className="w-20 h-20 rounded-lg" src={CardImage} />

      <div>
        <p className="text-sm m-2">Cloud Feel Muscle Tee</p>
        <p className="font-semibold m-2">Rs. 2,500</p>
      </div>
    </div>
  );
};

export default ProductCardMini;
