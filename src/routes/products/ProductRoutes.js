const Product = require("../../Models/Product");
const AddProduct = require("../../api/v1/products/controllers/AddProducts");
const approveProduct = require("../../api/v1/products/controllers/ApproveProduct");
const downvoteProduct = require("../../api/v1/products/controllers/downvoteProduct");
const findAllProducts = require("../../api/v1/products/controllers/findAllProducts");
const findApprovedProducts = require("../../api/v1/products/controllers/findApprovedProducts");
const findPendingProducts = require("../../api/v1/products/controllers/findPendingProducts");
const findProductById = require("../../api/v1/products/controllers/findProductById");
const upvoteProduct = require("../../api/v1/products/controllers/upvoteProduct");

const router = require("express").Router();

router.get("/", findAllProducts);

// find approved products
router.get("/approvedproducts", findApprovedProducts);

// find pending products
router.get("/pendingproducts", findPendingProducts);

// Update product status to approved
router.post("/statusapprove/:id", approveProduct);

router.get("/details/:id", findProductById);

router.post("/upvote/:id", upvoteProduct);

router.post("/downvote/:id", downvoteProduct);

router.post("/add", AddProduct); // TODO: I have to add products to the pending prodcts page

module.exports = router;
