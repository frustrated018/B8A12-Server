const Product = require("../../../../Models/Product");

const AllReportedProducts = async (req, res) => {
  try {
    const reportedProducts = await Product.find({ reportedStatus: "reported" });
    res.status(200).json(reportedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = AllReportedProducts;