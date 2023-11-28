const Product = require("../../../../Models/Product");

const findApprovedProducts = async (req, res) => {
  try {
    const approvedProducts = await Product.find({ productStatus: "approved" });
    res.json(approvedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = findApprovedProducts
