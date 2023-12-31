const Product = require("../../Models/Product");
const { ObjectId } = require("mongoose").Types;
const AddProduct = require("../../api/v1/products/controllers/AddProducts");
const AllReportedProducts = require("../../api/v1/products/controllers/AllReportedProducts");
const approveProduct = require("../../api/v1/products/controllers/ApproveProduct");
const deleteProduct = require("../../api/v1/products/controllers/DeleteProduct");
const editProduct = require("../../api/v1/products/controllers/EditProduct");
const FindProductByTag = require("../../api/v1/products/controllers/FindProductByTag");
const SortedByDate = require("../../api/v1/products/controllers/SortedByDate");
const SortedByVote = require("../../api/v1/products/controllers/SortedByVote");
const changeReportedStatus = require("../../api/v1/products/controllers/changeReportedStatus");
const downvoteProduct = require("../../api/v1/products/controllers/downvoteProduct");
const findAllProducts = require("../../api/v1/products/controllers/findAllProducts");
const findApprovedProducts = require("../../api/v1/products/controllers/findApprovedProducts");
const findPendingProducts = require("../../api/v1/products/controllers/findPendingProducts");
const findProductByEmail = require("../../api/v1/products/controllers/findProductByEmail");
const findProductById = require("../../api/v1/products/controllers/findProductById");
const upvoteProduct = require("../../api/v1/products/controllers/upvoteProduct");

const router = require("express").Router();

router.get("/", findAllProducts);

// Get products with reported status
router.get("/reportedproducts", AllReportedProducts);

// Change reported status of a product
router.post("/markreported/:id", changeReportedStatus);

// Sorted by date
router.get("/sortedbydate", SortedByDate);

// sorted by vote
router.get("/sortedbyvote", SortedByVote);

// Find Product By Tag
router.get("/findproductbytag", FindProductByTag);

// find approved products
router.get("/approvedproducts", findApprovedProducts);

// find pending products
router.get("/pendingproducts", findPendingProducts);

// Update product status to approved
router.post("/statusapprove/:id", approveProduct);

// Find products based on email
router.get("/myproducts/:email", findProductByEmail);

// Update product
router.put("/editproduct/:id", editProduct);

// Deleteproduct
router.delete("/deleteproduct/:id", deleteProduct);

router.get("/details/:id", findProductById);

router.post("/upvote/:id", upvoteProduct);

router.post("/downvote/:id", downvoteProduct);

router.post("/add", AddProduct); // TODO: I have to add products to the pending prodcts page

module.exports = router;
