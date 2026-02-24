import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white">

      <div className="backdrop-blur-lg bg-white/40 p-10 rounded-2xl shadow-xl w-96">

        <h2 className="text-3xl font-display text-center text-sage mb-6">
          Welcome Back
        </h2>

        <input className="w-full p-3 mb-4 rounded-lg border" placeholder="Email" />
        <input className="w-full p-3 mb-6 rounded-lg border" type="password" placeholder="Password" />

        <button
          onClick={handleLogin}
          className="w-full bg-walnut text-white py-3 rounded-full"
        >
          Login
        </button>

      </div>
    </div>
  );
}
