const Product = require("../../../../Models/Product");

const AddProduct = async (req, res) => {
  const newProduct = req.body.product;
  const result = await Product.create(newProduct);
  res.status(201).send(result);
};

module.exports = AddProduct;

// TODO: I have to add products to the pending prodcts page