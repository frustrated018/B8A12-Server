const User = require("../Models/UserSchema");

const verifyAdmin = async (req, res, next) => {
  try {
    const email = req.decoded.email;
    const query = { email: email };
    const user = await User.findOne(query);

    if (!user || !user.role || user.role !== "admin") {
      return res.status(403).send({ message: "Forbidden access" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = verifyAdmin;
