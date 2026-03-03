import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/adminApi";
import AddProductModal from "../components/AddProductModal";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);   // ❗ REQUIRED for modal

  // 🔹 Fetch all products
  const fetchProducts = () => {
    getProducts().then((res) => setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Delete product
  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="p-6">

      {/* ➕ ADD PRODUCT BUTTON */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* 📦 PRODUCTS TABLE */}
      <table className="w-full bg-white rounded shadow">

        <thead>
          <tr className="text-left border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Category</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b">

              <td className="p-3">{product.name}</td>
              <td className="p-3">₹{product.price}</td>
              <td className="p-3">{product.category}</td>

              <td className="p-3">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {/* 🧩 MODAL */}
      <AddProductModal
        open={open}
        setOpen={setOpen}
        fetchProducts={fetchProducts}
      />

    </div>
  );
};

export default Products;