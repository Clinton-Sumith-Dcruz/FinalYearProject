import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getStats = () => API.get("/admin/stats");
export const getUsers = () => API.get("/admin/users");
export const getProducts = () => API.get("/admin/products");
export const getOrders = () => API.get("/admin/orders");

export const addProduct = (data) => API.post("/admin/products", data);
export const deleteProduct = (id) => API.delete(`/admin/products/${id}`);