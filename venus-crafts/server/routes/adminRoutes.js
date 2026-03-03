import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* ================= USERS ================= */
router.get("/users", async (req, res) => {
  try {
    const [data] = await db.query("SELECT id, name, email, role, created_at FROM users");
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* ================= PRODUCTS ================= */
router.get("/products", async (req, res) => {
  try {
    const [data] = await db.query("SELECT * FROM products ORDER BY created_at DESC");
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* ================= ORDERS ================= */
router.get("/orders", async (req, res) => {
  try {
    const [data] = await db.query(`
      SELECT 
        orders.id,
        orders.total_amount,
        orders.status,
        orders.created_at,
        users.name AS name
      FROM orders
      JOIN users ON orders.user_id = users.id
      ORDER BY orders.created_at DESC
    `);

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;