const router = require ("express").Router();

const authenticationController = require("../controllers/authentication")

//Register
router.post("/register", authenticationController.registerUser);

//Login

router.post("/login", authenticationController.loginUser);

module.exports = router;