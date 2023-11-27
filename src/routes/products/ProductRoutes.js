const findAllProducts = require("../../api/v1/products/controllers/findAllProducts");
const findProductById = require("../../api/v1/products/controllers/findProductById");


const router = require("express").Router();

router.get("/", findAllProducts); 

router.get("/details/:id", findProductById)

module.exports = router