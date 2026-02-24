import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Executive Office Table",
    img: "https://m.media-amazon.com/images/I/51sKT8cEGGL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Conference Table",
    img: "https://image.made-in-china.com/318f0j00LElUWmFcEPby/meeting-table-mp4.webp",
  },
  {
    title: "Reception Desk",
    img: "https://images-cdn.ubuy.co.in/69595387432fe6809b095c84-modern-reception-desk-l-shaped.jpg",
  },
  {
    title: "Wooden Storage Cabinet",
    img: "https://m.media-amazon.com/images/I/71rRReJmTiL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Corporate Name Board",
    img: "https://nutcaseshop.com/cdn/shop/files/NC-CUS-UVMETALBLK16X7-001c.jpg?v=1696831917&width=1445",
  },
  {
    title: "Wooden Trophy & Memento",
    img: "https://giftkyade.com/cdn/shop/files/81nNG23lydL._SL1500_450x.jpg?v=1744271117",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f5f0] text-gray-800">

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
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-500">
            VENUSCRAFT
          </h1>

          <p className="mt-6 text-lg text-white">
            Enterprise Luxury Wooden Interiors
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
      <section className="py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <img
          src="https://images.unsplash.com/photo-1598300056393-4aac492f4344"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-semibold text-yellow-600 mb-6">
            Who We Are
          </h2>

          <p className="leading-loose text-gray-600">
            We craft premium executive furniture for corporate offices,
            boardrooms, reception areas and luxury interiors. Every piece
            reflects status, precision and timeless design.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-white">
        <h2 className="text-4xl text-center text-yellow-600 font-semibold mb-16">
          Our Creations
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden shadow-lg bg-[#fdfdfd]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-center font-medium">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATEMENT PARALLAX */}
      <section
        className="h-[50vh] flex items-center justify-center text-white text-center bg-fixed bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600210492493-0946911123ea)",
        }}
      >
        <h2 className="text-4xl font-semibold bg-black/50 px-10 py-6 rounded-xl">
          Crafted for Corporations. Designed for Legacy.
        </h2>
      </section>

      {/* CONTACT */}
      <section className="py-24 text-center">
        <h2 className="text-4xl text-yellow-600 font-semibold mb-6">
          Let’s Build Your Workspace
        </h2>

        <p className="text-gray-600">
          Bengaluru • +91 98765 43210 • venuscraftluxury@gmail.com
        </p>
      </section>

    </div>
  );
}