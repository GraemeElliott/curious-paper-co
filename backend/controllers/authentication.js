const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require ("jsonwebtoken");


const registerUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_PASS_SEC).toString(),
        passwordConfirm: CryptoJS.AES.encrypt(req.body.passwordConfirm, process.env.CRYPTO_PASS_SEC_CONF).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Incorrect username / no user found")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_PASS_SEC);
        const enteredPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        enteredPassword !==req.body.password && res.status(401).json("Incorrect password");

        const accessToken = jwt.sign({
            id:user._id, isAdmin: user.isAdmin,
        }, process.env.JWT_SEC_KEY,
        {expiresIn: "3d"});

        const { password, passwordConfirm, ...responseUser } = user._doc;

        res.status(200).json({...responseUser, accessToken});

    } catch(err) {
        res.status(500).json(err)

    }
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;