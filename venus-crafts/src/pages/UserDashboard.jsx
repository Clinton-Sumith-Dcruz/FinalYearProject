import { useState } from "react";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "orders", label: "Orders", icon: <FaBoxOpen /> },
    { id: "wishlist", label: "Wishlist", icon: <FaHeart /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#f8f5f0] to-[#ece7df]">

      {/* SIDEBAR */}
      <motion.div
        animate={{ width: open ? 260 : 80 }}
        className="bg-black text-white p-5 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            {open && <h1 className="text-yellow-500 text-xl">VENUSCRAFT</h1>}
            <FaBars className="cursor-pointer" onClick={() => setOpen(!open)} />
          </div>

          {menu.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 p-3 mb-3 rounded-lg cursor-pointer transition
              ${
                active === item.id
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              {open && item.label}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="flex items-center gap-2 text-red-400"
        >
          <FaSignOutAlt /> {open && "Logout"}
        </button>
      </motion.div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10 bg-white p-4 rounded-xl shadow">
          <h2 className="text-2xl font-semibold capitalize">{active}</h2>
          <div className="w-10 h-10 rounded-full bg-yellow-500" />
        </div>

        {/* DASHBOARD CONTENT */}
        {active === "dashboard" && (
          <>
            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Orders", value: "12" },
                { title: "Wishlist", value: "08" },
                { title: "Projects", value: "03" },
              ].map((item, i) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={i}
                  className="bg-white p-6 rounded-xl shadow"
                >
                  <p className="text-gray-500">{item.title}</p>
                  <h3 className="text-3xl font-bold">{item.value}</h3>
                  <span className="text-green-500 text-sm">+2.5%</span>
                </motion.div>
              ))}
            </div>

            {/* TABLE */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="mb-4 font-semibold">Recent Orders</h3>

              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500 text-sm">
                    <th>Product</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td>Executive Table</td>
                    <td className="text-yellow-600">In Progress</td>
                    <td>12 Feb 2026</td>
                  </tr>

                  <tr className="border-t">
                    <td>Reception Desk</td>
                    <td className="text-green-600">Completed</td>
                    <td>02 Feb 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {active === "orders" && (
          <div className="bg-white p-6 rounded-xl shadow">Orders Page</div>
        )}

        {active === "wishlist" && (
          <div className="bg-white p-6 rounded-xl shadow">Wishlist Page</div>
        )}

        {active === "profile" && (
          <div className="bg-white p-6 rounded-xl shadow max-w-md">
            <h3 className="mb-4 font-semibold">Profile</h3>
            <input className="border p-2 w-full mb-3" placeholder="Name" />
            <input className="border p-2 w-full mb-3" placeholder="Email" />
            <button className="bg-black text-white px-6 py-2 rounded">
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}