const Product = require("../../../../Models/Product");

const findProductByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const products = await Product.find({ "productOwner.email": email });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findProductByEmail;
