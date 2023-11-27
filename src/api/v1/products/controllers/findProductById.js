const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Product = require("../../../../Models/Product");

const findProductById = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await Product.findOne(query);
  res.send(result);
};

module.exports = findProductById;
