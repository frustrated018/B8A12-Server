const Product = require("../../../../Models/Product");

const editProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Extract updated product data from the request body
    const updatedProductData = req.body.product;

    // Update the product fields
    existingProduct.name = updatedProductData.name;
    existingProduct.tags = updatedProductData.tags;
    existingProduct.image = updatedProductData.image;
    existingProduct.shortDescription = updatedProductData.shortDescription;
    existingProduct.longDescription = updatedProductData.longDescription;
    existingProduct.externalLinks = updatedProductData.externalLinks;

    // Save the updated product
    await existingProduct.save();

    // Respond with success
    res
      .status(200)
      .json({ message: "Product updated successfully", modifiedCount: 1 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = editProduct;
