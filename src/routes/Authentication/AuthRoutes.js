const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = require("express").Router();

const secret = process.env.ACCESS_TOKEN_SECRET;

router.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secret, { expiresIn: "1h" });
  res.send({token})
});

module.exports = router;
