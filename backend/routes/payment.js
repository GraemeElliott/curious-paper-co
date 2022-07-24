const paymentController = require ("../controllers/payment");
const router = require ("express").Router();

router.post("/payment", paymentController.stripePayment);




module.exports = router