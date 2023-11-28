const User = require("../../../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const setUserRole = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: {
      role: "admin",
    },
  };
  const result = await User.updateOne(filter, updatedDoc);
  res.send(result);
};

module.exports = setUserRole;
