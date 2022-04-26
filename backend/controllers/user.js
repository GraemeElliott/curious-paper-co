const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        const { password, ...responseUser } = user._doc;
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
};

const getUserStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: {createdAt: {$gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error);
    }
};

const updateUser = async (req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.CRYPTO_PASS_SEC
            ).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedUser)
    }catch (error){
        res.status(500).json(error)
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch {
        res.status(500).json(err)
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...responseUser } = user._doc;
        res.status(200).json(responseUser);
    } catch (error) {
        res.status(500).json(error)
    }
};

exports.getAllUsers = getAllUsers;
exports.getUserStats = getUserStats;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUser= getUser;