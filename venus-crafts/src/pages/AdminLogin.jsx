import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLogin() {
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
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[380px] bg-black/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-yellow-500/30"
      >
        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-400 hover:text-yellow-500 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-semibold text-yellow-500 text-center mb-10">
          Admin Panel
        </h1>

        {/* EMAIL */}
        <div className="relative mb-8">
          <input
            type="email"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none focus:border-yellow-500"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all
          peer-placeholder-shown:top-2
          peer-placeholder-shown:text-sm
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500">
            Admin Email
          </label>
        </div>

        {/* PASSWORD */}
        <div className="relative mb-10">
          <input
            type={show ? "text" : "password"}
            placeholder=" "
            className="peer w-full border-b-2 border-gray-500 bg-transparent py-2 text-white outline-none focus:border-yellow-500"
          />

          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all
          peer-placeholder-shown:top-2
          peer-placeholder-shown:text-sm
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500">
            Password
          </label>

          <div
            onClick={() => setShow(!show)}
            className="absolute right-2 top-2 cursor-pointer text-gray-400"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => {
            localStorage.setItem("role", "admin");
            navigate("/admin-dashboard");
          }}
          className="w-full bg-yellow-500 text-black py-3 rounded-full tracking-wide
          hover:bg-yellow-400 transition duration-300 font-medium"
        >
          ENTER DASHBOARD
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Restricted access • VenusCraft Admin
        </p>
      </motion.div>
    </div>
  );
}