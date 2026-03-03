import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // 🔹 FETCH ALL ORDERS (ADMIN)
  const fetchOrders = () => {
    axios
      .get("http://localhost:5000/api/admin/orders")
      .then((res) => setOrders(res.data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔹 UPDATE ORDER STATUS
  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/admin/orders/${id}`, {
      status,
    });

    fetchOrders(); // refresh after update
  };

  return (
    <div className="space-y-4">

      {orders.map((item) => (
        <div
          key={item.id}
          className="p-5 bg-white rounded-xl shadow flex justify-between items-center"
        >

          {/* LEFT */}
          <div>
            <p className="font-semibold">Order #{item.id}</p>

            <p className="text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString()}
            </p>

            <p className="text-sm text-gray-500">
              User: {item.user_name}
            </p>
          </div>

          {/* AMOUNT */}
          <p className="font-bold text-lg text-yellow-600">
            ₹ {item.total_amount}
          </p>

          {/* STATUS DROPDOWN */}
          <select
            value={item.status}
            onChange={(e) => updateStatus(item.id, e.target.value)}
            className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm outline-none"
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>

        </div>
      ))}

    </div>
  );
}