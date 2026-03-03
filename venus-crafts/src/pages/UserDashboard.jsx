import { useState, useEffect } from "react";
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
import axios from "axios";

export default function UserDashboard() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const [stats, setStats] = useState({ orders: 0, wishlist: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/orders/1").then((res) => {
      setOrders(res.data);
      setStats((prev) => ({ ...prev, orders: res.data.length }));
      setRecentOrders(res.data.slice(0, 2));
    });

    axios.get("http://localhost:5000/api/user/wishlist/1").then((res) => {
      setWishlist(res.data);
      setStats((prev) => ({ ...prev, wishlist: res.data.length }));
    });
  }, []);

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
            <FaBars onClick={() => setOpen(!open)} className="cursor-pointer" />
          </div>

          {menu.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 p-3 mb-3 rounded-lg cursor-pointer
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

        {/* DASHBOARD */}
        {active === "dashboard" && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Orders", value: stats.orders },
                { title: "Wishlist", value: stats.wishlist },
                { title: "Projects", value: "03" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow">
                  <p className="text-gray-500">{item.title}</p>
                  <h3 className="text-3xl font-bold">{item.value}</h3>
                  <span className="text-green-500 text-sm">+2.5%</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="mb-4 font-semibold">Recent Orders</h3>
              <table className="w-full">
                <tbody>
                  {recentOrders.map((o) => (
                    <tr key={o.id} className="border-t">
                      <td>Order #{o.id}</td>
                      <td className="text-yellow-600">{o.status}</td>
                      <td>{new Date(o.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ORDERS */}
        {active === "orders" && (
          <div className="grid gap-4">
            {orders.map((o) => (
              <div key={o.id} className="bg-white p-5 rounded-xl shadow flex justify-between">
                <div>
                  <p className="font-semibold">Order #{o.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(o.created_at).toLocaleDateString()}
                  </p>
                </div>
                <p className="font-bold text-yellow-600">₹ {o.total_amount}</p>
                <span className="text-sm">{o.status}</span>
              </div>
            ))}
          </div>
        )}

        {/* WISHLIST */}
        {active === "wishlist" && (
          <div className="grid md:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow">

                {/* ✅ IMAGE FIX ONLY */}
                <div className="w-full h-44 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="mt-2 font-semibold">{item.name}</h3>
                <p className="text-yellow-600 font-bold">₹ {item.price}</p>
              </div>
            ))}
          </div>
        )}

        {/* PROFILE */}
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