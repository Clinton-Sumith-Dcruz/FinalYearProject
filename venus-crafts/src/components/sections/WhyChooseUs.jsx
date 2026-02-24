import { motion } from "framer-motion";
import { FaGem, FaCrown, FaShieldAlt, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaGem />,
    title: "Unmatched Craftsmanship",
    desc: "Every piece is designed with precision, elegance, and timeless detailing.",
  },
  {
    icon: <FaCrown />,
    title: "Elite Luxury Identity",
    desc: "VenusCraft is not fashion — it is a statement of status and class.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Premium Quality Guarantee",
    desc: "Only the finest materials curated for long-lasting excellence.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Aesthetic",
    desc: "Inspired by Paris, Milan, London — made for modern icons.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 md:px-20 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl gold-text mb-20"
      >
        Why Choose VenusCraft
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-10">

        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-yellow-500/20 hover:border-yellow-500 transition"
          >
            <div className="text-3xl text-yellow-600 mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}