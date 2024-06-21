import { Link } from "react-router-dom";

import McLogo from "../../assets/Images/Logos/mastercard-logo.png";
import VisaLogo from "../../assets/Images/Logos/visa-logo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 border-t-2 border-black bg-white text-black  ">
        <nav>
          <h6 className="footer-title text-base">Account</h6>
          <Link to="/account/signin" className="text-base cool-link">
            Login
          </Link>
          <Link to="/account/signup" className="text-base cool-link">
            Signup
          </Link>
          <Link to="/account" className="text-base cool-link">
            Orders
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-base">Shop</h6>
          <Link to="/collections/men" className="text-base cool-link">
            Men
          </Link>
          <Link to="/collections/women" className="text-base cool-link">
            Women
          </Link>
          <Link to="/collections/kids" className="text-base cool-link">
            Kids
          </Link>
          <Link to="/collections/accessories" className="text-base cool-link">
            Accessories
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-base">About</h6>
          <Link className="text-base cool-link">FAQs</Link>
          <Link className="text-base cool-link">Contact Us</Link>
          <Link className="text-base cool-link">Privacy Policy</Link>
          <Link className="text-base cool-link">Shipping Policy</Link>
          <Link className="text-base cool-link">Return & Exchange Policy</Link>
        </nav>

        <form>
          <h6 className="footer-title text-base">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="input input-bordered join-item"
              />
              <button className="btn  bg-black text-white hover:bg-slate-800 join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="flex flex-col md:flex-row justify-between items-center  py-8 border-t border-black sm:px-24">
        <p className="font-bold text-sm sm:text-base pb-5 md:pb-0">
          © 2024 | IRONWEAR Fitness | All Rights Reserved.
        </p>
        <div className="flex  ">
          <img
            src={McLogo}
            className="w-16 shadow-lg py-2 px-1  rounded-sm mx-2.5"
          />
          <img src={VisaLogo} className="w-16 shadow-lg   rounded-sm mx-2.5" />
        </div>
      </div>
    </>
  );
};

export default Footer;
