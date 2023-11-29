const Product = require("../../../../Models/Product");
const { ObjectId } = require("mongoose").Types;

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID and delete it
    const result = await Product.deleteOne({ _id: new ObjectId(productId) });

    // Check if the product exists and was successfully deleted
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Respond with a success message
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = deleteProduct;
