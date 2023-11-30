const Product = require("../../../../Models/Product");

// Controller function for sorting by upvotes
const SortedByVote = async (req, res) => {
  try {
    // Fetch products sorted by upvoteCount in descending order
    const sortedProducts = await Product.find()
      .sort({ upvoteCount: -1 })
      .exec();

    // Respond with the sorted products
    res.status(200).json(sortedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = SortedByVote;
