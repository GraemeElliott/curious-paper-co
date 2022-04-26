const Cart = require ("../models/Cart")
const { verifyToken, verifyTokenAuthorisation, verifyTokenAdmin } = require("./verify-token");
const cartController = require("../controllers/cart");

const router = require ("express").Router();

//CREATE CART

router.post("/", verifyToken, cartController.createCart);

//GET ALL CARTS

router.get("/", verifyTokenAdmin, cartController.getCart);

//UPDATE CART

router.put("/:id", verifyTokenAuthorisation, cartController.updateCart);

//DELETE CART

router.delete("/:id", verifyTokenAuthorisation, cartController.deleteCart);

//GET USER CART

router.get("/:userId", verifyTokenAuthorisation, cartController.getUserCart);

module.exports = router;