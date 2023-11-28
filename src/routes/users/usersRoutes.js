const addNewUser = require("../../api/v1/users/controllers/addNewUser");
const deleteUser = require("../../api/v1/users/controllers/deleteUser");
const getAllUsers = require("../../api/v1/users/controllers/getAllUsers");
const verifyToken = require("../../middlewares/verifyToken");
const User = require("../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const router = require("express").Router();
// get all the users in /users route
router.get("/", verifyToken, getAllUsers);

// Add a new user
router.post("/add", verifyToken, addNewUser);

// Delete User
router.delete("/delete/:id", verifyToken, deleteUser);

router.patch("/makeadmin/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: {
      role: "admin",
    },
  };
  const result = await User.updateOne(filter, updatedDoc);
  res.send(result);
});

module.exports = router;
