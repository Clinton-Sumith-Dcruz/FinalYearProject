import { useState, useEffect } from "react";
import axios from "axios";
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

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = await axios.get("http://localhost:5000/api/admin/users");
        const p = await axios.get("http://localhost:5000/api/admin/products");
        const o = await axios.get("http://localhost:5000/api/admin/orders");

        setUsers(u.data);
        setProducts(p.data);
        setOrders(o.data);
      } catch (err) {
        console.log("ADMIN FETCH ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const revenue = orders.reduce(
    (acc, o) => acc + Number(o.total_amount || 0),
    0
  );

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

        {/* ✅ LOGOUT */}
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/admin-login";
          }}
          className="text-red-500"
        >
          Logout
        </button>
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

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {active === "overview" && (
              <Overview
                users={users}
                products={products}
                orders={orders}
                revenue={revenue}
              />
            )}

            {active === "users" && <Users users={users} />}
            {active === "products" && <Products products={products} />}
            {active === "orders" && <Orders orders={orders} />}
          </>
        )}
      </div>
    </div>
  );
}

/* ================= OVERVIEW ================= */

function Overview({ users, products, orders, revenue }) {

  // ✅ MONTHLY SALES DATA
  const data = Array.from({ length: 12 }, (_, i) => {
    const monthOrders = orders.filter(
      (o) => new Date(o.created_at).getMonth() === i
    );

    return {
      name: new Date(0, i).toLocaleString("default", { month: "short" }),
      revenue: monthOrders.reduce(
        (sum, o) => sum + Number(o.total_amount),
        0
      ),
      orders: monthOrders.length,
    };
  });

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-10">
        <Card title="Users" value={users.length} icon={<FaUsers />} />
        <Card title="Products" value={products.length} icon={<FaBoxOpen />} />
        <Card title="Orders" value={orders.length} icon={<FaShoppingCart />} />
        <Card title="Revenue" value={`₹${revenue}`} icon={<FaRupeeSign />} />
      </div>

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

              <Line type="monotone" dataKey="revenue" stroke="#eab308" strokeWidth={3}/>
              <Line type="monotone" dataKey="orders" stroke="#000" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </>
  );
}

/* ================= USERS ================= */

function Users({ users }) {
  if (!users.length) return <Empty text="No users found" />;

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      {users.map(u => (
        <div key={u.id} className="border-b py-2">
          <p className="font-semibold">{u.name}</p>
          <p className="text-sm text-gray-500">{u.email}</p>
        </div>
      ))}
    </div>
  );
}

/* ================= PRODUCTS ================= */

function Products({ products }) {
  if (!products.length) return <Empty text="No products found" />;

  return (
    <div className="bg-white p-8 rounded-2xl shadow grid grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded-lg">
          <img src={p.image} className="h-32 w-full object-contain mb-2" />
          <p>{p.name}</p>
          <p className="text-yellow-600 font-bold">₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}

/* ================= ORDERS ================= */

function Orders({ orders }) {
  if (!orders.length) return <Empty text="No orders found" />;

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      {orders.map(o => (
        <div key={o.id} className="flex justify-between border-b py-3">
          <div>
            <p>Order #{o.id}</p>
            <p className="text-sm text-gray-500">
              {new Date(o.created_at).toLocaleDateString()}
            </p>
          </div>
          <p className="text-yellow-600 font-bold">₹ {o.total_amount}</p>
          <span>{o.status}</span>
        </div>
      ))}
    </div>
  );
}

/* ================= EMPTY ================= */

function Empty({ text }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow text-center text-gray-500">
      {text}
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