const User = require("../../Models/UserSchema");

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
        return res.status(400).send({ message: "User already exists", insertedId: null });
      }
  
      const result = await User.create(newUser);
      res.status(201).send({ message: "User created successfully", insertedId: 1 });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send({ message: "Internal server error", insertedId: null });
    }
  });
  

module.exports = router;
