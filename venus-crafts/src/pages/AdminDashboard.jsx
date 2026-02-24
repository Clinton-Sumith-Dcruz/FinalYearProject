import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaRupeeSign,
  FaSearch,
  FaBell,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function AdminDashboard() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f8f6f2] to-[#ece7df]">

      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white p-6 flex flex-col justify-between">

        <div>
          <h1 className="text-yellow-500 text-2xl mb-10">ADMIN</h1>

          {["overview", "users", "products", "orders"].map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={`mb-4 px-4 py-3 rounded-lg cursor-pointer capitalize transition
              ${
                active === item
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-white/10"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <button className="text-red-500">Logout</button>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-10 overflow-y-auto">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">

          <div className="relative w-96">
            <FaSearch className="absolute top-4 left-4 text-gray-400" />
            <input
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white shadow outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <FaBell className="text-xl cursor-pointer" />
            <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        <h1 className="text-3xl font-semibold mb-8 capitalize">{active}</h1>

        {active === "overview" && <Overview />}
        {active === "users" && <Users />}
        {active === "products" && <Products />}
        {active === "orders" && <Orders />}
      </div>
    </div>
  );
}

/* ================= OVERVIEW ================= */

function Overview() {

  const data = [
    { name: "Jan", revenue: 12000, orders: 40 },
    { name: "Feb", revenue: 21000, orders: 65 },
    { name: "Mar", revenue: 18000, orders: 52 },
    { name: "Apr", revenue: 27800, orders: 80 },
    { name: "May", revenue: 32000, orders: 95 },
    { name: "Jun", revenue: 41000, orders: 120 },
    { name: "Jul", revenue: 45000, orders: 150 },
    { name: "Aug", revenue: 55000, orders: 120 },
    { name: "Sept", revenue: 58000, orders: 120 },
    { name: "Oct", revenue: 60000, orders: 120 },
    { name: "Nov", revenue: 70000, orders: 120 },
    { name: "Dec", revenue: 70500, orders: 120 }
  ];

  return (
    <>
      {/* KPI CARDS */}
      <div className="grid grid-cols-4 gap-6 mb-10">

        <Card title="Users" value="1,240" icon={<FaUsers />} />
        <Card title="Products" value="84" icon={<FaBoxOpen />} />
        <Card title="Orders" value="320" icon={<FaShoppingCart />} />
        <Card title="Revenue" value="₹8.4L" icon={<FaRupeeSign />} />

      </div>

      {/* CHART */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl mb-6 font-semibold">Sales Analytics</h2>

        <div className="w-full h-80">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#eab308"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="orders"
                stroke="#000"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </>
  );
}

/* ================= USERS ================= */

function Users() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      Users management UI
    </div>
  );
}

/* ================= PRODUCTS ================= */

function Products() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      Products management UI
    </div>
  );
}

/* ================= ORDERS ================= */

function Orders() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      Orders management UI
    </div>
  );
}

/* ================= CARD ================= */

function Card({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow flex items-center gap-4"
    >
      <div className="text-yellow-500 text-2xl">{icon}</div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
      </div>
    </motion.div>
  );
}