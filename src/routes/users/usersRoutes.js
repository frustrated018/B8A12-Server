const User = require("../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const router = require("express").Router();

router.get("/", async (req, res) => {
  const result = await User.find();
  res.send(result);
});

router.post("/add", async (req, res) => {
  try {
    const newUser = req.body.userInfo;
    const query = { email: newUser.email };
    const existingUser = await User.findOne(query);

    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User already exists", insertedId: null });
    }

    const result = await User.create(newUser);
    res
      .status(201)
      .send({ message: "User created successfully", insertedId: 1 });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .send({ message: "Internal server error", insertedId: null });
  }
});

// Delete User
router.delete("/delete/:id", async (req, res) => {
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

router.patch("/makeadmin/:id", async (req, res) => {
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
