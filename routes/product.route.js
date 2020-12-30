const express = require("express");
const router = express.Router();

const {getProducts,postProduct} = require("../controllers/product.controller")
router.get("/products/:Category", getProducts)

router.get("/productadd/:ProductName/:ProductId/:Category", postProduct)

module.exports = router;