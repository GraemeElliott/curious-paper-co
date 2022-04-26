const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true, minlength: 5, maxlength: 20},
        email: {type: String, required: true, unique: true, minlength: 5, maxlength: 30},
        password: {type: String, required: true, minlength: 5, maxlength: 200},
        passwordConfirm: {type: String, required: true, minlength: 5, maxlength: 200},
        isAdmin: {type: Boolean, default: false}
    },
    {timestamps: true}
);

// Login
UserSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
  };
  
  // Register
  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.passwordConfirm = await bcrypt.hash(this.passwordConfirm, salt);
  });

module.exports = mongoose.model ("User", UserSchema);