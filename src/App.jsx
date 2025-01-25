import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Footer from "./components/Footer/Footer";

import HomePage from "./containers/HomePage/HomePage";
import MenPage from "./containers/MenPage/MenPage";
import WomenPage from "./containers/WomenPage/WomenPage";
import KidsPage from "./containers/KidsPage/KidsPage";
import AccessoriesPage from "./containers/AccessoriesPage/AccessoriesPage";
import SignupPage from "./containers/SignupPage/SignupPage";
import SigninPage from "./containers/SigninPage/SigninPage";
import SingleProductPage from "./containers/SingleProductPage/SingleProductPage";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";
import AccountPage from "./containers/AccountPage/AccountPage";
import AddressesPage from "./containers/AddressesPage/AddressesPage";
import OrderSuccessPage from "./containers/OrderSuccessPage/OrderSuccessPage";
import SearchedProductsPage from "./containers/SearchedProductsPage/SearchedProductsPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./containers/ResetPasswordPage/ResetPasswordPage";
import OrderCancelPage from "./containers/OrderCancelPage/OrderCancelPage";

import PrivateRoutes from "./utils/PrivateRoutes";

import "./App.css";

function App() {
  return (
    <div
      style={{ fontFamily: "Lato, sans-serif" }}
      className="bg-white text-black"
    >
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/men" element={<MenPage />} />
        <Route path="/collections/women" element={<WomenPage />} />
        <Route path="/collections/kids" element={<KidsPage />} />{" "}
        <Route path="/collections/accessories" element={<AccessoriesPage />} />
        <Route path="/account/signup" element={<SignupPage />} />
        <Route path="/account/signin" element={<SigninPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/order-cancel" element={<OrderCancelPage />} />
        <Route
          path="/account/forgot-password"
          element={<ForgotPasswordPage />}
        />
        <Route
          path="/account/reset-password/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route path="/search/:query" element={<SearchedProductsPage />} />{" "}
        <Route
          path="/products/:productId/:color"
          element={<SingleProductPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/addresses" element={<AddressesPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
