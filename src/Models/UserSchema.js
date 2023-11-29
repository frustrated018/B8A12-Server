const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  verificationStatus: {
    type: String,
    enum:["verified", "unverified" ],
    default: "unverified",
  },
});

const User = model("User", UserSchema);

module.exports = User;
