const User = require("../../../../Models/UserSchema");

const getAllUsers = async (req, res) => {
  const result = await User.find();
  res.send(result);
};

module.exports = getAllUsers;
