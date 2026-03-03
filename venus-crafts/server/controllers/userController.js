export const getUserWishlist = async (req, res) => {
  const { userId } = req.params;

  const [rows] = await db.query(
    `
    SELECT 
      wishlist.id,
      products.name,
      products.price,
      products.image
    FROM wishlist
    JOIN products ON wishlist.product_id = products.id
    WHERE wishlist.user_id = ?
    `,
    [userId]
  );

  res.json(rows);
};