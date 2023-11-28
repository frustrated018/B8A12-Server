const Product = require("../../Models/Product");
const AddProduct = require("../../api/v1/products/controllers/AddProducts");
const downvoteProduct = require("../../api/v1/products/controllers/downvoteProduct");
const findAllProducts = require("../../api/v1/products/controllers/findAllProducts");
const findProductById = require("../../api/v1/products/controllers/findProductById");
const upvoteProduct = require("../../api/v1/products/controllers/upvoteProduct");

const router = require("express").Router();

router.get("/", findAllProducts);

// find approved products
router.get("/approvedproducts", async (req, res) => {
  try {
    const approvedProducts = await Product.find({ productStatus: "approved" });
    res.json(approvedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// find pending products
router.get("/pendingproducts", async (req, res) => {
  try {
    const pendingProducts = await Product.find({ productStatus: "pending" });
    res.json(pendingProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/details/:id", findProductById);

router.post("/upvote/:id", upvoteProduct);

router.post("/downvote/:id", downvoteProduct);

router.post("/add", AddProduct); // TODO: I have to add products to the pending prodcts page

module.exports = router;
