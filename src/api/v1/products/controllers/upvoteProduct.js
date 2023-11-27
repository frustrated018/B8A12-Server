const Product = require("../../../../Models/Product");

const upvoteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Product.updateOne(
      { _id: id },
      { $inc: { upvoteCount: 1 } }
    );

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = upvoteProduct;
