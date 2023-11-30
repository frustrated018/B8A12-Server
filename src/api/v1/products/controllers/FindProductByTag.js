const Product = require("../../../../Models/Product");

const FindProductByTag = async (req, res) => {
  try {
    const { tag } = req.query;

    // Validate that the tag parameter exists
    if (!tag) {
      return res.status(400).json({ message: "Tag parameter is missing." });
    }

    // Use a regex to perform a case-insensitive partial match on tags
    const regex = new RegExp(tag, "i");

    // Use the find method with the regex to retrieve products with matching tags
    const products = await Product.find({ tags: { $regex: regex } });

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found with the specified tag." });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = FindProductByTag;
