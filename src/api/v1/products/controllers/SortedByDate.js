const Product = require("../../../../Models/Product");

// TODO: First search for whether this product is featured or not


// Controller to find all products and sort them by timestamp in descending order
const SortedByDate = async (req, res) => {
  try {
    // Find all products and sort by timestamp in descending order
    const products = await Product.find().sort({ timestamp: -1 });

    // Return the sorted products as JSON
    res.json(products);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the controller function
module.exports = SortedByDate;
