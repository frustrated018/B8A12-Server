const Product = require("../../../../Models/Product");

const AddProduct = async (req, res) => {
  try {
    const newProduct = req.body.product;
    const result = await Product.create(newProduct);
    res.status(201).send({ result, insertedId: 1 });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = AddProduct;
