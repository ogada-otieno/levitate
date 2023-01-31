import { Navigate } from "react-router-dom";

export const isAuthenticated = () => {
  try {
    const { isAuthenticated } = JSON.parse(localStorage.getItem("auth"));
    return isAuthenticated;
  } catch (error) {
    return false;
  }
};

const PrivateRoutes = ({ Components }) => {
  return (
    <>{isAuthenticated() ? <>{Components}</> : <Navigate to="/login" />}</>
  );
};

export default PrivateRoutes;
