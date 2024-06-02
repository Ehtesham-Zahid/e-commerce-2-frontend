import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");

  return token && token !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/account/signin" />
  );
};

export default PrivateRoutes;
