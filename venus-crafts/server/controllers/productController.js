import db from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM products WHERE category = 'Mementos'"
    );
    res.json(rows);
  } catch (err) {
    console.log(err);
  }
};