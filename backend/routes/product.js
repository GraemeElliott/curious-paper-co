const { verifyTokenAdmin } = require("./verify-token");
const productController = require("../controllers/product");

const router = require ("express").Router();

//CREATE PRODUCT

router.post("/", verifyTokenAdmin, productController.createProduct);

//GET ALL PRODUCTS

router.get("/", productController.getAllProducts);

//UPDATE PRODUCT

router.put("/:id", verifyTokenAdmin, productController.updateProduct);

//DELETE PRODUCT

router.delete("/:id", verifyTokenAdmin, productController.deleteProduct);

//GET PRODUCT

router.get("/:id", productController.getProduct);

module.exports = router;