const findAllProducts = require("../../api/v1/products/controllers/findAllProducts");


const router = require("express").Router();

router.get("/", findAllProducts); //will add the function to find all here

module.exports = router