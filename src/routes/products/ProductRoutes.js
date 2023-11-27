const downvoteProduct = require("../../api/v1/products/controllers/downvoteProduct");
const findAllProducts = require("../../api/v1/products/controllers/findAllProducts");
const findProductById = require("../../api/v1/products/controllers/findProductById");
const upvoteProduct = require("../../api/v1/products/controllers/upvoteProduct");

const router = require("express").Router();

router.get("/", findAllProducts);

router.get("/details/:id", findProductById);

router.post("/upvote/:id", upvoteProduct);

router.post("/downvote/:id", downvoteProduct);

module.exports = router;
