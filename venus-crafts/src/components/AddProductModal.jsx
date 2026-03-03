import { useState } from "react";
import { addProduct } from "../services/adminApi";

const AddProductModal = ({ open, setOpen, fetchProducts }) => {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  if (!open) return null;

  const handleSubmit = async () => {
    await addProduct(formData);

    fetchProducts();   // refresh table
    setOpen(false);    // close modal

    setFormData({
      name: "",
      price: "",
      category: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="bg-white p-6 rounded w-[400px]">

        <h2 className="text-xl mb-4">Add Product</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Price"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />

        <button
          onClick={handleSubmit}
          className="bg-yellow-500 px-4 py-2 rounded w-full"
        >
          Add Product
        </button>

      </div>
    </div>
  );
};

export default AddProductModal;