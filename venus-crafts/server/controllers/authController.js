import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// ================= REGISTER =================
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hash = await bcrypt.hash(password, 10);

    if (role === "admin") {
      await db.query(
        "INSERT INTO admins (name,email,password) VALUES (?,?,?)",
        [name, email, hash]
      );
    } else {
      await db.query(
        "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
        [name, email, hash, "user"]
      );
    }

    res.json({ message: "REGISTERED SUCCESSFULLY" });

  } catch (err) {
    console.log(err);
    res.status(500).json("Registration failed");
  }
};


// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [user] = await db.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (user.length > 0) {
      const valid = await bcrypt.compare(password, user[0].password);
      if (!valid) return res.status(400).json("Invalid credentials");

      const token = jwt.sign(
        { id: user[0].id, role: "user" },
        process.env.JWT_SECRET
      );

      return res.json({ token, role: "user" });
    }

    const [admin] = await db.query(
      "SELECT * FROM admins WHERE email=?",
      [email]
    );

    if (admin.length > 0) {
      const valid = await bcrypt.compare(password, admin[0].password);
      if (!valid) return res.status(400).json("Invalid credentials");

      const token = jwt.sign(
        { id: admin[0].id, role: "admin" },
        process.env.JWT_SECRET
      );

      return res.json({ token, role: "admin" });
    }

    res.status(404).json("User not found");

  } catch (err) {
    console.log(err);
    res.status(500).json("Login failed");
  }
};


// ================= USER ORDERS =================
export const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  const [rows] = await db.query(
    "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
    [userId]
  );

  res.json(rows);
};


// ================= USER WISHLIST =================
export const getUserWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.query(
      `
      SELECT 
        wishlist.id,
        products.name,
        products.price,
        products.image
      FROM wishlist
      JOIN products 
        ON wishlist.product_id = products.id
      WHERE wishlist.user_id = ?
      `,
      [userId]
    );

    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json("Wishlist fetch failed");
  }
};