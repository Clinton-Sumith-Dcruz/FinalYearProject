import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";   // adjust path if needed

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("✅ SERVER FILE LOADED");

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

/* ================= LANDING PRODUCTS ================= */
app.get("/api/products", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.log("PRODUCT ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

/* ================= ADMIN ================= */

app.get("/api/admin/users", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.log("USERS ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/admin/products", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.log("ADMIN PRODUCTS ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/admin/orders", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders");
    res.json(rows);
  } catch (err) {
    console.log("ORDERS ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

/* ================= USER ================= */

app.get("/api/user/orders/:id", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM orders WHERE user_id = ?",
      [req.params.id]
    );
    res.json(rows);
  } catch (err) {
    console.log("USER ORDERS ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/user/wishlist/:id", async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT products.* FROM wishlist
       JOIN products ON wishlist.product_id = products.id
       WHERE wishlist.user_id = ?`,
      [req.params.id]
    );
    res.json(rows);
  } catch (err) {
    console.log("WISHLIST ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

/* ================= START SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});