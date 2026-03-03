import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiMenu, HiX } from "react-icons/hi";

export default function Landing() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#f8f5f0] text-gray-800 font-body">

      {/* HAMBURGER */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white bg-black/40 backdrop-blur-md p-3 rounded-full"
        >
          <HiMenu size={26} />
        </button>
      </div>

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#f8f5f0] shadow-2xl z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="font-display text-xl text-yellow-600">VENUSCRAFT</h2>
          <HiX
            size={26}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-6 p-6 text-gray-700 font-medium">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Who We Are</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#brand" onClick={() => setMenuOpen(false)}>Crafted for Corporations</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* ✅ HELP DESK ADDED */}
          <a href="#helpdesk" onClick={() => setMenuOpen(false)}>Help Desk</a>
        </nav>
      </div>

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-display text-yellow-500">
            VENUSCRAFT
          </h1>

          <p className="mt-6 text-lg text-white">
            Enterprise Luxury Wooden Mementos
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={() => navigate("/user-login")}
              className="px-8 py-3 bg-white rounded-full shadow hover:scale-105 transition"
            >
              Client Login
            </button>

            <button
              onClick={() => navigate("/admin-login")}
              className="px-8 py-3 bg-yellow-500 text-black rounded-full shadow hover:scale-105 transition"
            >
              Admin
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <img
          src="https://img.freepik.com/free-vector/glass-trophy-acrylic-winner-award-realistic_107791-205.jpg?semt=ais_hybrid&w=740&q=80"
          className="rounded-xl shadow-lg"
          alt="about"
        />

        <div>
          <h2 className="text-4xl font-display text-yellow-600 mb-6">
            Who We Are
          </h2>

          <p className="leading-loose text-gray-600">
            We craft premium mementos for corporate recognitions, award
            ceremonies and distinguished celebrations. Each piece is designed
            to symbolize achievement, prestige and timeless remembrance through
            fine materials and precise detailing.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-white">
        <h2 className="text-4xl font-display text-center text-yellow-600 mb-16">
          Products
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden shadow-lg bg-[#fdfdfd]"
            >
              <div className="h-72 w-full bg-[#f3f3f3] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center font-medium">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section id="brand" className="pt-16 pb-10 bg-[#f8f5f0] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-display text-yellow-600 mb-3">
            Crafted for Corporations
          </h2>

          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Timeless mementos that celebrate excellence, honor achievements and
            elevate every corporate milestone into a lasting legacy. At
            VENUSCRAFT, each piece is thoughtfully designed using refined
            materials, precise craftsmanship and a deep understanding of brand
            value — transforming recognition into an experience that is
            remembered for years to come.
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pt-10 pb-16 bg-[#f8f5f0] text-center">
        <h2 className="text-4xl font-display text-yellow-600 font-semibold mb-4">
          Let’s Create Something Iconic
        </h2>

        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Partner with VENUSCRAFT to design bespoke corporate mementos that
          reflect prestige, appreciation and legacy.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-700 text-lg">
          <div>
            <p className="font-semibold text-yellow-600">Location</p>
            <p>Bengaluru, India</p>
          </div>

          <div>
            <p className="font-semibold text-yellow-600">Phone</p>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <p className="font-semibold text-yellow-600">Email</p>
            <p>venuscraftluxury@gmail.com</p>
          </div>
        </div>
      </section>

    </div>
  );
}