import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function UserLogin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[380px] bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl"
      >
        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:text-yellow-600 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-semibold text-yellow-600 text-center mb-10">
          Client Login
        </h1>

        {/* EMAIL */}
        <div className="relative mb-8">
          <input
            type="email"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 outline-none focus:border-yellow-600"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
          peer-placeholder-shown:top-2 
          peer-placeholder-shown:text-sm
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-600">
            Email Address
          </label>
        </div>

        {/* PASSWORD */}
        <div className="relative mb-10">
          <input
            type={show ? "text" : "password"}
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 outline-none focus:border-yellow-600"
          />

          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
          peer-placeholder-shown:top-2 
          peer-placeholder-shown:text-sm
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-600">
            Password
          </label>

          <div
            onClick={() => setShow(!show)}
            className="absolute right-2 top-2 cursor-pointer text-gray-500"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => {
            localStorage.setItem("role", "user");
            navigate("/user-dashboard");
          }}
          className="w-full bg-black text-white py-3 rounded-full tracking-wide 
          hover:bg-yellow-600 hover:text-black transition duration-300"
        >
          LOGIN
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Crafted for corporate excellence ✦
        </p>
      </motion.div>
    </div>
  );
}