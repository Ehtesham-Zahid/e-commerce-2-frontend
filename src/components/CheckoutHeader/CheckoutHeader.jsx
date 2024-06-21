import { Link } from "react-router-dom";

import Logo from "../../assets/Images/Logos/main-logo-3.png";
const CheckoutHeader = () => {
  return (
    <div className="bg-white border-b border-black flex justify-center w-full py-2">
      <Link to="/">
        <img src={Logo} className="w-64" />
      </Link>
    </div>
  );
};

export default CheckoutHeader;
