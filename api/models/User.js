import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minlength: 1, maxlength: 30 },
    surname: { type: String, required: true, minlength: 1, maxlength: 30 },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 100,
    },
    password: { type: String, required: true, minlength: 5, maxlength: 200 },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);
export default User;
