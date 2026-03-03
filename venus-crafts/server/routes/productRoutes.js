import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM products WHERE category='Mementos'"
  );
  res.json(rows);
});

export default router;