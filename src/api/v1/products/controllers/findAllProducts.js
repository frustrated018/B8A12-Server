const Product = require("../../../../Models/Product");

const findAllProducts = async (req, res) => {
  const result = await Product.find();
  res.send(result);
};

module.exports = findAllProducts;
