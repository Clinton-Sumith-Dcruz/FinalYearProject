import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-20 pt-20 pb-10">

      <div className="grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h1 className="gold-text text-2xl font-semibold mb-4">VENUSCRAFT</h1>
          <p className="text-white/60 text-sm">
            Timeless luxury crafted for modern icons.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h2 className="text-white mb-4">Navigation</h2>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#about" className="hover:text-yellow-500">About</a></li>
            <li><a href="#products" className="hover:text-yellow-500">Products</a></li>
            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* COLLECTIONS */}
        <div>
          <h2 className="text-white mb-4">Collections</h2>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Watches</li>
            <li>Fragrances</li>
            <li>Apparel</li>
            <li>Shoes</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="text-white mb-4">Stay Connected</h2>

          <div className="flex border border-white/20 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />
            <button className="bg-yellow-500 text-black px-4 text-sm">
              JOIN
            </button>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6 text-white">
            {[FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="border border-white/20 p-2 rounded-full cursor-pointer hover:border-yellow-500 hover:text-yellow-500"
              >
                <Icon size={14} />
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-white/40 text-sm mt-16 border-t border-white/10 pt-6">
        © 2026 VENUSCRAFT — All Rights Reserved
      </div>

    </footer>
  );
}