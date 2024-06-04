import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import MenPage from "./containers/MenPage/MenPage";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import WomenPage from "./containers/WomenPage/WomenPage";
import KidsPage from "./containers/KidsPage/KidsPage";
import AccessoriesPage from "./containers/AccessoriesPage/AccessoriesPage";
import SignupPage from "./containers/SignupPage/SignupPage";
import SigninPage from "./containers/SigninPage/SigninPage";
import SingleProductPage from "./containers/SingleProductPage/SingleProductPage";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";
import Footer from "./components/Footer/Footer";
import AccountPage from "./containers/AccountPage/AccountPage";
import AddressesPage from "./containers/AddressesPage/AddressesPage";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      {/* <Banner />
      <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/men" element={<MenPage />} />
        <Route path="/collections/women" element={<WomenPage />} />
        <Route path="/collections/kids" element={<KidsPage />} />{" "}
        <Route path="/collections/accessories" element={<AccessoriesPage />} />
        <Route path="/account/signup" element={<SignupPage />} />
        <Route path="/account/signin" element={<SigninPage />} />
        <Route
          path="/products/:productId/:color"
          element={<SingleProductPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/addresses" element={<AddressesPage />} />
        </Route>
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
