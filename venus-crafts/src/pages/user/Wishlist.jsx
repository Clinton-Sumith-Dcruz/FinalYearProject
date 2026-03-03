import { useEffect, useState } from "react";
import axios from "axios";

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/wishlist/1")
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow">
          <img
            src={item.image}
            className="h-40 w-full object-cover rounded"
          />
          <h3 className="mt-2 font-semibold">{item.name}</h3>
          <p className="text-yellow-600 font-bold">₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}