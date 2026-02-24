import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1618220179428-22790b461013)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-black/55 backdrop-brightness-75" />

      {/* CONTENT */}
      <div className="relative z-10 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold text-yellow-500 tracking-wide"
        >
          VENUSCRAFT
        </motion.h1>

        <p className="mt-4 text-white/90 max-w-xl mx-auto text-lg">
          Timeless elegance for the modern elite.
        </p>

        {/* MAIN BUTTON */}
        <button className="mt-8 px-8 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
          Explore Collection
        </button>

        {/* LOGIN BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">

          <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
            User Login
          </button>

          <button className="px-6 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-400 transition">
            Admin Login
          </button>

          <button onClick={() => navigate("/user-login")}>User Login</button>
<button onClick={() => navigate("/admin-login")}>Admin Login</button>

        </div>

      </div>
    </section>
  );
}
const navigate = useNavigate();
