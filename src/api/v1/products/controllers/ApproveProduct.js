const Product = require("../../../../Models/Product");

const approveProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the product is already approved
    if (product.productStatus === "approved") {
      return res.status(400).json({ message: "Product is already approved" });
    }

    // Update the product status to approved
    product.productStatus = "approved";

    // Save the updated product
    await product.save();

    res
      .status(200)
      .json({ message: "Product status updated to approved", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = approveProduct;
