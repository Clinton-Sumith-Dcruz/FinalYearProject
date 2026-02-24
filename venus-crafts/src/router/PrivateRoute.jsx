import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Login />;
}
