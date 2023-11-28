const addNewUser = require("../../api/v1/users/controllers/addNewUser");
const getAllUsers = require("../../api/v1/users/controllers/getAllUsers");
const verifyToken = require("../../middlewares/verifyToken");
const User = require("../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const router = require("express").Router();

router.get("/", verifyToken, getAllUsers);

router.post("/add", verifyToken, addNewUser);

// Delete User
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await User.deleteOne(query);
    res.send(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ message: "Internal server error", deletedCount: 0 });
  }
});

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
