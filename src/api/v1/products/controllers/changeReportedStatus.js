const Product = require("../../../../Models/Product");

const changeReportedStatus = async (req, res) => {
  const productId = req.params.id;
  const newReportedStatus = req.query.reportedStatus;
  console.log(newReportedStatus);

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update reported status based on the query parameter
    product.reportedStatus = newReportedStatus || "reported"; // Default to "reported" if query parameter is not provided
    await product.save();

    res.status(200).json({
      message: "Reported status changed successfully",
      reportedStatus: 1,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = changeReportedStatus;
