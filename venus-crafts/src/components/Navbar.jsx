import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="flex justify-between items-center px-8 py-4">

        <h1 className="gold-text text-2xl font-semibold">VENUSCRAFT</h1>

        <div className="hidden md:flex gap-10 text-sm">
          {["about", "products", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="hover:text-yellow-500">
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 bg-black">
          {["about", "products", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item.toUpperCase()}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}