const { verifyTokenAuthorisation, verifyTokenAdmin } = require("./verify-token");
const userController = require("../controllers/user");

const router = require ("express").Router();

//GET ALL USERS

router.get("/", verifyTokenAdmin, userController.getAllUsers);

//GET USER STATS

router.get("/stats", verifyTokenAdmin, userController.getUserStats);

//UPDATE

router.put("/:id", verifyTokenAuthorisation, userController.updateUser);

//DELETE

router.delete("/:id", verifyTokenAuthorisation, userController.deleteUser);

//GET USER

router.get("/:id", verifyTokenAdmin, userController.getUser);

module.exports = router;