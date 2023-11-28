const User = require("../../../../Models/UserSchema");

const { ObjectId } = require("mongoose").Types;

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await User.deleteOne(query);
    res.send(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ message: "Internal server error", deletedCount: 0 });
  }
};

module.exports = deleteUser;
