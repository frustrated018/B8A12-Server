const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
  },
 
});

const User = model("user", UserSchema);

module.exports = User;
