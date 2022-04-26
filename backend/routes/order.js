const { verifyToken, verifyTokenAuthorisation, verifyTokenAdmin } = require("./verify-token");
const orderController = require("../controllers/order");

const router = require ("express").Router();

//CREATE ORDER

router.post("/", verifyToken, orderController.createOrder);

//GET ALL ORDERS

router.get("/", verifyTokenAdmin, orderController.getOrders);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAdmin, orderController.getMonthlyIncome);
  

//UPDATE ORDER

router.put("/:id", verifyTokenAdmin, orderController.updateOrder);

//DELETE ORDER

router.delete("/:id", verifyTokenAdmin, orderController.deleteOrder);

//GET USER ORDERS

router.get("/:userId", verifyTokenAuthorisation, orderController.getUserOrders);

module.exports = router;