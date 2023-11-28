const Product = require("../../../../Models/Product");

const findPendingProducts = async (req, res) => {
  try {
    const pendingProducts = await Product.find({ productStatus: "pending" });
    res.json(pendingProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = findPendingProducts;
